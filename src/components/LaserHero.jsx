import { useEffect, useRef } from "react";
import "./LaserHero.css";

/* ---- Conteúdo dos cards que passam no rodapé do hero ---- */
const codeCards = [
  {
    type: "code",
    title: "api/routes.ts",
    lines: [
      'import { Router } from "express";',
      "const router = Router();",
      "",
      "router.get('/users', async (req, res) => {",
      "  const users = await db.users.findMany();",
      "  return res.json(users);",
      "});",
    ],
  },
  {
    type: "code",
    title: "app/layout.tsx",
    lines: [
      "export default function RootLayout({",
      "  children,",
      "}: {",
      "  children: React.ReactNode;",
      "}) {",
      "  return (",
      '    <html lang="pt-BR">',
      "      <body>{children}</body>",
      "    </html>",
      "  );",
      "}",
    ],
  },
  {
    type: "code",
    title: "lib/supabase.ts",
    lines: [
      "import { createClient } from '@supabase/supabase-js';",
      "",
      "const url = import.meta.env.VITE_SUPABASE_URL;",
      "const key = import.meta.env.VITE_SUPABASE_KEY;",
      "",
      "export const db = createClient(url, key);",
    ],
  },
  {
    type: "code",
    title: "docker-compose.yml",
    lines: [
      "services:",
      "  api:",
      "    build: ./backend",
      "    restart: unless-stopped",
      "    depends_on:",
      "      - postgres",
      "      - redis",
    ],
  },
];

const serviceCards = [
  {
    type: "service",
    icon: "web",
    title: "Desenvolvimento Web",
    desc: "Aplicações React e FastAPI, do design à produção, com foco em performance e acessibilidade.",
  },
  {
    type: "service",
    icon: "desktop",
    title: "Aplicações Desktop",
    desc: "Sistemas de gestão em Java que rodam offline e centralizam rotinas operacionais.",
  },
  {
    type: "service",
    icon: "ai",
    title: "Automação & IA",
    desc: "Integrações com IA e automações que cortam trabalho manual e aceleram entregas.",
  },
  {
    type: "service",
    icon: "cloud",
    title: "Cloud & Deploy",
    desc: "Deploy em VPS com Docker, CI/CD e monitoramento — do commit à produção.",
  },
];

// Intercala código e serviço para dar ritmo à esteira.
const CARDS = [
  codeCards[0],
  serviceCards[0],
  codeCards[1],
  serviceCards[1],
  codeCards[2],
  serviceCards[2],
  codeCards[3],
  serviceCards[3],
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
};

// Realce leve de sintaxe (strings, comentários, palavras-chave).
const KEYWORDS = new Set([
  "import", "from", "export", "default", "const", "let", "var", "return",
  "async", "await", "function", "new", "if", "else", "for", "of", "class",
  "extends", "interface", "type", "services", "build", "restart", "depends_on",
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
  return (
    <section id="hero" className="laser-hero">
      <Stars />
      <div className="laser-hero-glow" aria-hidden="true" />
      {/* Raio laser — 4 camadas (core branco → fúcsia larga), com ciclo de ignição */}
      <div className="laser-beam" aria-hidden="true">
        <div className="beam-ignite">
          <div className="beam beam-outer" />
          <div className="beam beam-mid" />
          <div className="beam beam-inner" />
          <div className="beam beam-core" />
        </div>
      </div>

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

      <div className="scrolling-cards" aria-hidden="true">
        <div className="scrolling-cards-track">
          {[...CARDS, ...CARDS].map((card, index) =>
            card.type === "code" ? (
              <CodeCard key={index} title={card.title} lines={card.lines} />
            ) : (
              <ServiceCard key={index} icon={card.icon} title={card.title} desc={card.desc} />
            )
          )}
        </div>
      </div>

      <div className="laser-hero-gradient-bottom" aria-hidden="true" />
    </section>
  );
}
