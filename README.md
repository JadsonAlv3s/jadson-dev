# Portfólio — Jadson Alves de Almeida

Landing page de portfólio (React + Vite). Fundo fixo com um grafo de
conhecimento interativo (canvas, sem dependências externas) — nós com labels
reais (skills, projetos, formação) conectados por linhas, com simulação de
forças e reação ao mouse — atrás de toda a página, em paleta escura
grafite/azul-marinho com acento ciano. Mostra os projetos LegendaViva, Rota
Clara e CheckMate.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy

Recomendado: Vercel (mesmo provedor do LegendaViva).

```bash
npx vercel
```

Depois do primeiro deploy, atualize a URL real em:
- `index.html` (`canonical`, `og:url`, JSON-LD `url`)
- `public/robots.txt` (linha `Sitemap:`)
- `public/sitemap.xml` (`<loc>`)

## Checklist de SEO já aplicado

- Meta `description`, `keywords`, `robots`, `canonical`
- Open Graph + Twitter Card
- JSON-LD `Person` (nome, cargo, redes)
- `robots.txt` + `sitemap.xml`
- HTML semântico (`header`, `main`, `section`, `article`, `footer`)
- Texto alternativo / `aria-label` nos elementos decorativos e listas de stack
- `prefers-reduced-motion` respeitado na animação do grafo de fundo (renderiza
  layout estabilizado sem loop contínuo)

## Pendências conhecidas

- Trocar `portfolio-jadson.vercel.app` pela URL real após o deploy
- Criar imagem `public/og-image.png` (1200x630) para preview em redes sociais
- Definir stack do Rota Clara quando confirmada
- Considerar pré-renderização (ex: vite-plugin-prerender ou migrar para Next.js/Astro) se o SEO em buscadores que não executam JS for crítico — hoje é uma SPA client-side
