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
    id: 'avaliacao-fisica',
    name: 'Avaliação Física',
    tag: 'Desktop · Saúde & Gestão Clínica',
    description:
      'Aplicativo desktop offline para estúdios de Pilates e Correção Postural: cadastro de pacientes, anamnese com triagem de risco, avaliação postural e antropométrica, plano de atendimento versionado, sessões em SOAP com evolução em gráficos e laudos em PDF. Banco SQLite criptografado na máquina do profissional, com acesso por senha, auditoria, backup e conformidade com a LGPD. Instalável em macOS e Windows.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Drizzle ORM', 'ECharts', 'Vitest', 'GitHub Actions'],
    link: null,
    linkLabel: 'Projeto para cliente',
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
    id: 'easy-conciliador',
    name: 'Easy',
    tag: 'Desktop · Automação Contábil',
    description:
      'Conciliador de comprovantes para consultoria contábil: recebe um .zip com centenas de comprovantes em PDF e devolve a relação de títulos e o arquivo de lançamentos pronto para o sistema contábil. Como os comprovantes são captura de tela, a leitura é por OCR — conferida pelo dígito verificador da linha digitável e pelo cruzamento de valores, de modo que um erro de leitura vira exceção sinalizada, nunca lançamento errado.',
    stack: ['Python', 'RapidOCR', 'ONNX Runtime', 'pdfplumber', 'OpenCV', 'Tkinter', 'PyInstaller', 'pytest'],
    link: null,
    linkLabel: 'Projeto para cliente',
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
