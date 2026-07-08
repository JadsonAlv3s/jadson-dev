import { useEffect, useRef } from "react";
import "./LaserHero.css";

const codeSnippets = [
  {
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
    title: "components/Header.tsx",
    lines: [
      "import { useState } from 'react';",
      "import { Menu, X } from 'lucide-react';",
      "",
      "export function Header() {",
      "  const [isOpen, setIsOpen] = useState(false);",
      "  return (",
      "    <header>",
      "      <nav>{/* navigation */}</nav>",
      "    </header>",
      "  );",
      "}",
    ],
  },
  {
    title: "styles/global.css",
    lines: [
      "@tailwind base;",
      "@tailwind components;",
      "@tailwind utilities;",
      "",
      "@layer base {",
      "  body {",
      "    @apply bg-zinc-950 text-white;",
      "  }",
      "}",
    ],
  },
  {
    title: "lib/supabase.ts",
    lines: [
      "import { createClient } from '@supabase/supabase-js';",
      "",
      "const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;",
      "const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;",
      "",
      "export const supabase = createClient(supabaseUrl, supabaseKey);",
    ],
  },
  {
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
];

function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.02;
      for (const s of stars) {
        const opacity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 10 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
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

  return <canvas ref={canvasRef} className="laser-stars" />;
}

function LaserBeam() {
  return (
    <div className="laser-beam-container">
      <div className="laser-beam laser-beam-vertical" />
      <div className="laser-beam laser-beam-horizontal" />
      <div className="laser-glow" />
    </div>
  );
}

function ScrollingCodeCards() {
  return (
    <div className="scrolling-cards">
      <div className="scrolling-cards-track">
        {[...codeSnippets, ...codeSnippets, ...codeSnippets].map(
          (snippet, index) => (
            <div key={index} className="code-card-mini">
              <div className="code-card-mini-header">
                <div className="code-card-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="code-card-mini-title">{snippet.title}</span>
              </div>
              <div className="code-card-mini-body">
                {snippet.lines.slice(0, 5).map((line, i) => (
                  <div key={i} className="code-line">
                    <span className="line-number">{i + 1}</span>
                    <span className="line-code">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function LaserHero() {
  return (
    <section id="hero" className="laser-hero">
      <Stars />
      <LaserBeam />
      <ScrollingCodeCards />

      <div className="laser-hero-content">
        <div className="laser-hero-badge">
          <span className="badge-dot" />
          Olá, eu sou
        </div>

        <h1 className="laser-hero-title">
          <span className="gradient-white-cyan">Jadson</span>{" "}
          <span className="gradient-cyan-purple">Alves</span>
        </h1>

        <p className="laser-hero-subtitle">
          Estudante de Sistemas para Internet (IFRN) e desenvolvedor focado em
          produtos com propósito real — acessibilidade, mobilidade e gestão.
        </p>

        <div className="laser-hero-actions">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-secondary">
            Falar comigo
          </a>
        </div>
      </div>

      <div className="laser-hero-gradient-bottom" />
    </section>
  );
}
