import { useEffect, useRef } from 'react'

// Grafo de conhecimento: hub central + categorias + itens (skills/projetos/formação).
const NODES = [
  { id: 'hub', label: 'Jadson Alves', r: 7, group: 'hub' },

  { id: 'skills', label: 'Skills', r: 5, group: 'cat' },
  { id: 'projetos', label: 'Projetos', r: 5, group: 'cat' },
  { id: 'formacao', label: 'IFRN · TSI', r: 5, group: 'cat' },
  { id: 'github', label: 'GitHub', r: 4, group: 'cat' },
  { id: 'linkedin', label: 'LinkedIn', r: 4, group: 'cat' },

  { id: 'python', label: 'Python', r: 3.5, group: 'leaf' },
  { id: 'java', label: 'Java', r: 3.5, group: 'leaf' },
  { id: 'react', label: 'React', r: 3.5, group: 'leaf' },
  { id: 'fastapi', label: 'FastAPI', r: 3.5, group: 'leaf' },
  { id: 'postgres', label: 'PostgreSQL', r: 3.5, group: 'leaf' },
  { id: 'docker', label: 'Docker', r: 3.5, group: 'leaf' },
  { id: 'aws', label: 'AWS', r: 3.5, group: 'leaf' },
  { id: 'git', label: 'Git', r: 3.5, group: 'leaf' },

  { id: 'legendaviva', label: 'LegendaViva', r: 4, group: 'leaf' },
  { id: 'rotaclara', label: 'Rota Clara', r: 4, group: 'leaf' },
  { id: 'checkmate', label: 'CheckMate', r: 4, group: 'leaf' },
  { id: 'acessibilidade', label: 'Acessibilidade', r: 3.5, group: 'leaf' },
  { id: 'seguranca', label: 'Cloud & Segurança', r: 3.5, group: 'leaf' },
]

const EDGES = [
  ['hub', 'skills'], ['hub', 'projetos'], ['hub', 'formacao'],
  ['hub', 'github'], ['hub', 'linkedin'],
  ['skills', 'python'], ['skills', 'java'], ['skills', 'react'],
  ['skills', 'fastapi'], ['skills', 'postgres'], ['skills', 'docker'],
  ['skills', 'aws'], ['skills', 'git'],
  ['projetos', 'legendaviva'], ['projetos', 'rotaclara'], ['projetos', 'checkmate'],
  ['legendaviva', 'acessibilidade'],
  ['formacao', 'seguranca'],
]

export default function NetworkGraph() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const nodes = NODES.map((n) => ({
      ...n,
      x: width / 2 + (Math.random() - 0.5) * width * 0.7,
      y: height / 2 + (Math.random() - 0.5) * height * 0.7,
      vx: 0,
      vy: 0,
    }))
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
    const edges = EDGES.map(([a, b]) => [byId[a], byId[b]])

    const mouse = { x: -9999, y: -9999, active: false }
    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    function onMouseLeave() {
      mouse.active = false
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    const REPEL = 1400
    const SPRING_LEN = 110
    const SPRING_K = 0.02
    const CENTER_K = 0.0009
    const DAMPING = 0.86
    const MOUSE_RADIUS = 220
    const MOUSE_K = 0.045

    let rafId
    function step() {
      // Repulsão entre todos os pares
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          let dx = a.x - b.x
          let dy = a.y - b.y
          let distSq = dx * dx + dy * dy
          if (distSq < 1) distSq = 1
          const dist = Math.sqrt(distSq)
          const force = REPEL / distSq
          const fx = (dx / dist) * force
          const fy = (dy / dist) * force
          a.vx += fx
          a.vy += fy
          b.vx -= fx
          b.vy -= fy
        }
      }

      // Atração elástica nas arestas
      for (const [a, b] of edges) {
        const dx = b.x - a.x
        const dy = b.y - a.y
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const diff = dist - SPRING_LEN
        const fx = (dx / dist) * diff * SPRING_K
        const fy = (dy / dist) * diff * SPRING_K
        a.vx += fx
        a.vy += fy
        b.vx -= fx
        b.vy -= fy
      }

      // Gravidade leve para o centro da viewport
      const cx = width / 2
      const cy = height / 2
      for (const n of nodes) {
        n.vx += (cx - n.x) * CENTER_K
        n.vy += (cy - n.y) * CENTER_K
      }

      // O mouse "atrai" os nós próximos — efeito de seguir o cursor
      if (mouse.active) {
        for (const n of nodes) {
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS && dist > 1) {
            const strength = (1 - dist / MOUSE_RADIUS) * MOUSE_K
            n.vx += dx * strength
            n.vy += dy * strength
          }
        }
      }

      for (const n of nodes) {
        n.vx *= DAMPING
        n.vy *= DAMPING
        n.x += n.vx
        n.y += n.vy
      }

      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(110, 231, 219, 0.14)'
      ctx.lineWidth = 1
      for (const [a, b] of edges) {
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      for (const n of nodes) {
        const color =
          n.group === 'hub' ? '#5eead4' : n.group === 'cat' ? '#7dd3fc' : '#94a3b8'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = 0.85
        ctx.fill()
        ctx.globalAlpha = 1

        ctx.font = n.group === 'leaf' ? '11px Segoe UI' : '12px Segoe UI'
        ctx.fillStyle = n.group === 'hub' ? 'rgba(226,232,240,0.95)' : 'rgba(148,163,184,0.75)'
        ctx.textBaseline = 'middle'
        ctx.fillText(n.label, n.x + n.r + 6, n.y)
      }
    }

    if (prefersReducedMotion) {
      // Sem animação contínua: estabiliza o layout e desenha um único frame.
      for (let i = 0; i < 150; i++) step()
    } else {
      const loop = () => {
        step()
        rafId = requestAnimationFrame(loop)
      }
      loop()
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-graph-canvas" aria-hidden="true" />
}
