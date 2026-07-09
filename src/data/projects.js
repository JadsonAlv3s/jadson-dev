export const projects = [
  {
    id: 'eitapdv',
    name: 'EitaPDV',
    tag: 'SaaS · PDV & Gestão',
    description:
      'SaaS multi-tenant de PDV e gestão para o comércio (lanchonete/açaiteria, varejo e mercadinho): cardápio digital, PDV, KDS de cozinha em tempo real, controle de estoque, financeiro/caixa, crediário, dashboard do lojista, automação de pedidos via WhatsApp e cobrança recorrente (PIX/cartão) com Mercado Pago. Em produção numa VPS com Docker, isolamento entre lojas reforçado por RLS no PostgreSQL.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Socket.io', 'Docker', 'Mercado Pago'],
    link: 'https://eitapdv.com',
    linkLabel: 'Ver site ao vivo',
  },
  {
    id: 'legenda-viva',
    name: 'LegendaViva',
    tag: 'Web App · Acessibilidade',
    description:
      'Transcrição de fala em legendas em tempo real (latência <1.5s), com tradução simultânea PT/EN/ES, para pessoas surdas e com deficiência auditiva acompanharem eventos sem instalação ou login.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Docker'],
    link: 'https://legenda-viva.vercel.app/',
    linkLabel: 'Ver projeto ao vivo',
  },
  {
    id: 'rota-clara',
    name: 'Rota Clara',
    tag: 'App Mobile · Mobilidade',
    description:
      'Rastreamento de ônibus em tempo real na região de São José de Mipibu e Nísia Floresta (RN), com mapeamento de rotas turísticas para as praias de Camurupim, Búzios e Tabatinga.',
    stack: ['Mobile', 'Geolocalização'],
    link: null,
    linkLabel: 'Em desenvolvimento',
  },
  {
    id: 'checkmate',
    name: 'CheckMate',
    tag: 'Desktop · Gestão',
    description:
      'Sistema desktop em Java para gestão administrativa e operacional de uma academia de Jiu-Jitsu, eliminando controles manuais em papel e centralizando rotinas para proprietários, professores e gestores.',
    stack: ['Java'],
    link: null,
    linkLabel: 'Projeto acadêmico',
  },
  {
    id: 'danubia-carvalho',
    name: 'Danúbia Carvalho',
    tag: 'Landing Page · Contabilidade',
    description:
      'Site institucional para consultoria contábil estratégica: serviços, diferenciais, credenciais profissionais e depoimentos, com formulário de contato e WhatsApp integrado.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.danubiacarvalho.com/',
    linkLabel: 'Ver site ao vivo',
  },
  {
    id: 'flor-de-maria',
    name: 'Flor de Maria',
    tag: 'Landing Page · E-commerce · Moda',
    description:
      'Landing page com loja simples de moda feminina: catálogo de produtos, carrinho, avaliações de clientes e captura de e-mail com cupom de desconto.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://flordemariamodafeminina.com/',
    linkLabel: 'Ver site ao vivo',
  },
  {
    id: 'fino-sabor',
    name: 'Fino Sabor',
    tag: 'Landing Page · E-commerce · Alimentação',
    description:
      'Vitrine digital para açaiteria/sorveteria em São José de Mipibu (RN), com cardápio interativo de personalização passo a passo, carrinho e pedidos via WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://sorveteriafinosabor.online/',
    linkLabel: 'Ver site ao vivo',
  },
]
