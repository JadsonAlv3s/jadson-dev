import { useEffect, useRef } from "react";
import "./LaserHero.css";

/* ============================================================
   Cada SLOT tem duas versões do mesmo card, com o mesmo tamanho:
   - code: mostrada À ESQUERDA do laser (trilha de baixo)
   - service: mostrada À DIREITA do laser (trilha clipada)
   O laser é a linha de "scan" entre as duas.
   ============================================================ */
const SLOTS = [
  {
    code: {
      title: "api/routes.ts",
      lines: [
        'import { Router } from "express";',
        "const router = Router();",
        "",
        "router.get('/users', async (req, res) => {",
        "  const users = await db.users.findMany();",
        "  return res.json(users);",
        "});",
        "",
        "export default router;",
      ],
    },
    service: {
      icon: "web",
      title: "Desenvolvimento Web",
      desc: "Aplicações React e FastAPI, do design à produção, com foco em performance e acessibilidade.",
    },
  },
  {
    code: {
      title: "CheckMate.java",
      lines: [
        "public class MatriculaService {",
        "",
        "  public Recibo matricular(Aluno aluno,",
        "      Plano plano) {",
        "    validar(aluno);",
        "    var recibo = caixa.cobrar(plano);",
        "    repositorio.salvar(aluno);",
        "    return recibo;",
        "  }",
        "}",
      ],
    },
    service: {
      icon: "desktop",
      title: "Aplicações Desktop",
      desc: "Sistemas de gestão em Java que rodam offline e centralizam rotinas operacionais.",
    },
  },
  {
    code: {
      title: "bot/atendimento.ts",
      lines: [
        "const resposta = await claude.messages",
        "  .create({",
        "    model: 'claude-haiku-4-5',",
        "    system: promptDaLoja(tenant),",
        "    messages: historico,",
        "  });",
        "",
        "if (temPedido(resposta)) {",
        "  await criarPedido(resposta.pedido);",
        "}",
      ],
    },
    service: {
      icon: "ai",
      title: "Automação & IA",
      desc: "Integrações com IA e automações que cortam trabalho manual e aceleram entregas.",
    },
  },
  {
    code: {
      title: "docker-compose.yml",
      lines: [
        "services:",
        "  api:",
        "    build: ./backend",
        "    restart: unless-stopped",
        "    depends_on:",
        "      - postgres",
        "      - redis",
        "  proxy:",
        "    image: caddy:2-alpine",
      ],
    },
    service: {
      icon: "cloud",
      title: "Cloud & Deploy",
      desc: "Deploy em VPS com Docker, CI/CD e monitoramento — do commit à produção.",
    },
  },
  {
    code: {
      title: "prisma/schema.prisma",
      lines: [
        "model Order {",
        "  id        String   @id",
        "  tenantId  String",
        "  status    OrderStatus",
        "  items     OrderItem[]",
        "  total     Decimal",
        "",
        "  @@index([tenantId])",
        "}",
      ],
    },
    service: {
      icon: "pos",
      title: "EitaPDV · SaaS",
      desc: "PDV, estoque e financeiro multi-loja em produção — cardápio, KDS e cobrança recorrente.",
    },
  },
  {
    code: {
      title: "ws/transcricao.ts",
      lines: [
        "socket.on('audio', async (chunk) => {",
        "  const texto = await transcrever(chunk);",
        "  const legenda = await traduzir(",
        "    texto, idiomaDestino,",
        "  );",
        "  sala.emit('legenda', {",
        "    texto: legenda,",
        "    latencia: Date.now() - t0,",
        "  });",
        "});",
      ],
    },
    service: {
      icon: "captions",
      title: "LegendaViva",
      desc: "Legendas ao vivo com tradução simultânea para pessoas surdas acompanharem eventos.",
    },
  },
  {
    code: {
      title: "styles/global.css",
      lines: [
        ":root {",
        "  --brand: #8b5cf6;",
        "  --surface: #12101b;",
        "}",
        "",
        ".hero {",
        "  display: grid;",
        "  place-items: center;",
        "  min-height: 100dvh;",
        "}",
      ],
    },
    service: {
      icon: "layout",
      title: "Landing Pages",
      desc: "Páginas rápidas e bem-acabadas que seguem a identidade visual da marca e convertem.",
    },
  },
  {
    code: {
      title: "app/rotas.ts",
      lines: [
        "const posicao = watchPosition((gps) => {",
        "  const parada = maisProxima(gps);",
        "  mapa.atualizar({",
        "    onibus: frota.aoVivo(),",
        "    chegadaEm: eta(parada),",
        "  });",
        "});",
      ],
    },
    service: {
      icon: "map",
      title: "Rota Clara",
      desc: "Rastreamento de ônibus em tempo real e rotas turísticas na região de São José de Mipibu.",
    },
  },
];

const ICONS = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18H7Z" />
    </svg>
  ),
  pos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h4" />
    </svg>
  ),
  captions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 12h4M7 15.5h7M13.5 12H17" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
};

/* Realce leve de sintaxe (strings, comentários, palavras-chave). */
const KEYWORDS = new Set([
  "import", "from", "export", "default", "const", "let", "var", "return",
  "async", "await", "function", "new", "if", "else", "for", "of", "class",
  "extends", "interface", "type", "public", "model", "services", "build",
  "restart", "depends_on", "image",
]);

function tokenize(line) {
  const re = /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|([A-Za-z_$][\w$]*)|([^A-Za-z_$"'`]+)/g;
  const out = [];
  let m;
  while ((m = re.exec(line)) !== null) {
    if (m[1]) out.push({ t: m[1], c: "comment" });
    else if (m[2]) out.push({ t: m[2], c: "string" });
    else if (m[3]) out.push({ t: m[3], c: KEYWORDS.has(m[3]) ? "keyword" : "plain" });
    else out.push({ t: m[4], c: "plain" });
  }
  return out;
}

function CodeCard({ title, lines }) {
  return (
    <div className="hero-card hero-card-code">
      <div className="hero-card-header">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="hero-card-title">{title}</span>
      </div>
      <div className="hero-card-body">
        {lines.map((line, i) => (
          <div key={i} className="code-line">
            <span className="line-number">{i + 1}</span>
            <span className="line-code">
              {tokenize(line).map((tok, j) => (
                <span key={j} className={`tok tok-${tok.c}`}>{tok.t}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="hero-card hero-card-service">
      <div className="hero-card-icon">{ICONS[icon]}</div>
      <h3 className="hero-card-service-title">{title}</h3>
      <p className="hero-card-service-desc">{desc}</p>
    </div>
  );
}

/* Partículas que saltam do laser enquanto ele está ativo (particleBurst). */
const PARTICLES = [
  { top: "12%", x: -62, y: -34, s: 3, d: 1.1, delay: 0.0, c: "#ffffff" },
  { top: "20%", x: 48, y: -52, s: 2, d: 1.4, delay: 0.5, c: "#c4b5fd" },
  { top: "31%", x: -38, y: 40, s: 2.5, d: 0.9, delay: 0.9, c: "#e879f9" },
  { top: "38%", x: 70, y: 18, s: 2, d: 1.6, delay: 0.2, c: "#ffffff" },
  { top: "47%", x: -80, y: -12, s: 3, d: 1.3, delay: 1.1, c: "#c4b5fd" },
  { top: "53%", x: 56, y: 44, s: 2, d: 1.0, delay: 0.7, c: "#ffffff" },
  { top: "61%", x: -46, y: -58, s: 2.5, d: 1.5, delay: 0.3, c: "#e879f9" },
  { top: "69%", x: 84, y: -26, s: 2, d: 1.2, delay: 1.4, c: "#c4b5fd" },
  { top: "77%", x: -66, y: 30, s: 3, d: 1.1, delay: 0.6, c: "#ffffff" },
  { top: "85%", x: 40, y: 56, s: 2, d: 1.4, delay: 1.0, c: "#c4b5fd" },
  { top: "26%", x: 30, y: 62, s: 2, d: 1.7, delay: 1.6, c: "#ffffff" },
  { top: "90%", x: -52, y: -44, s: 2.5, d: 1.2, delay: 0.4, c: "#e879f9" },
];

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="beam-particle"
          style={{
            top: p.top,
            width: p.s,
            height: p.s,
            background: p.c,
            "--x": `${p.x}px`,
            "--y": `${p.y}px`,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let stars = [];

    function initStars() {
      const w = canvas.width;
      const h = canvas.height;
      stars = Array.from({ length: 110 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    }

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.02;
      for (const s of stars) {
        const opacity = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * s.speed * 10 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 224, 255, ${opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="laser-stars" aria-hidden="true" />;
}

export default function LaserHero() {
  const loop = [...SLOTS, ...SLOTS];
  const bandRef = useRef(null);
  const beamRef = useRef(null);

  /* O laser só acende enquanto um card está passando por baixo dele
     (como na referência). Checa a posição real dos cards da trilha. */
  useEffect(() => {
    const band = bandRef.current;
    const beam = beamRef.current;
    if (!band || !beam) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      beam.classList.add("beam-on");
      return;
    }

    const cards = band.querySelectorAll(".band-layer-code .hero-card");
    const id = setInterval(() => {
      const bandRect = band.getBoundingClientRect();
      const frac = window.innerWidth <= 720 ? 0.25 : 0.5;
      const beamX = bandRect.left + bandRect.width * frac;
      let on = false;
      for (const c of cards) {
        const r = c.getBoundingClientRect();
        if (r.left <= beamX && r.right >= beamX) { on = true; break; }
      }
      beam.classList.toggle("beam-on", on);
    }, 120);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="laser-hero">
      <Stars />
      <div className="laser-hero-glow" aria-hidden="true" />

      <div className="laser-hero-content">
        <div className="laser-hero-badge">
          <span className="badge-dot" />
          Olá, eu sou
        </div>

        <h1 className="laser-hero-title">
          <span className="title-strong">Jadson Alves</span>
          <span className="title-light">Desenvolvedor de Software.</span>
        </h1>

        <p className="laser-hero-subtitle">
          Estudante de Sistemas para Internet (IFRN) e desenvolvedor focado em
          produtos com propósito real — acessibilidade, mobilidade e gestão.
        </p>
      </div>

      {/* Faixa dos cards: duas trilhas sincronizadas (código | serviço),
          a de serviço clipada na posição do laser — o laser "escaneia"
          o card desenhado e revela o código por trás. */}
      <div className="cards-band" aria-hidden="true" ref={bandRef}>
        <div className="band-layer band-layer-code">
          <div className="cards-track">
            {loop.map((s, i) => (
              <CodeCard key={i} title={s.code.title} lines={s.code.lines} />
            ))}
          </div>
        </div>
        <div className="band-layer band-layer-service">
          <div className="cards-track">
            {loop.map((s, i) => (
              <ServiceCard key={i} icon={s.service.icon} title={s.service.title} desc={s.service.desc} />
            ))}
          </div>
        </div>

        <div className="laser-beam" ref={beamRef}>
          <div className="beam-idle" />
          <div className="beam-ignite">
            <div className="beam-flicker">
              <div className="beam beam-outer" />
              <div className="beam beam-mid" />
              <div className="beam beam-inner" />
              <div className="beam beam-core" />
            </div>
            <Particles />
          </div>
        </div>

        <div className="band-fade band-fade-l" />
        <div className="band-fade band-fade-r" />
        <div className="band-fade band-fade-t" />
        <div className="band-fade band-fade-b" />
      </div>
    </section>
  );
}
