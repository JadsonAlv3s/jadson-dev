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
    id: 'atendente-whatsapp-ia',
    name: 'Atendente de WhatsApp com IA',
    tag: 'Automação · IA · Em produção',
    description:
      'Bot de atendimento no WhatsApp integrado ao EitaPDV: conversa com o cliente em linguagem natural, consulta o cardápio da loja em tempo real e cria o pedido direto na tela da cozinha (KDS). Usa dois modelos de IA, com o reserva assumindo se o principal falhar, e uma instância isolada por loja.',
    stack: ['n8n', 'Evolution API', 'Claude', 'DeepSeek', 'PostgreSQL', 'Redis', 'Docker'],
    link: null,
    linkLabel: 'Integrado ao EitaPDV',
  },
  {
    id: 'fino-sabor',
    name: 'Fino Sabor',
    tag: 'Cardápio Online · Alimentação',
    description:
      'Cardápio online de açaiteria e sorveteria em São José de Mipibu (RN): o cliente monta o açaí em 3 passos, escolhe os sorvetes numa vitrine de 22 sabores e o pedido chega pronto no WhatsApp, com entrega, pagamento e troco. Instalável como app (PWA), com 41 testes na lógica de preço e identidade visual nova criada a partir da logo da loja.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Vitest'],
    link: 'https://sorveteriafinosabor.online/',
    linkLabel: 'Ver site ao vivo',
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
    id: 'mercadinho-pdv',
    name: 'Mercadinho PDV',
    tag: 'Web App · PDV & Estoque',
    description:
      'Frente de caixa e estoque para mercadinho de bairro: modo caixa em tela cheia com leitor de código de barras e atalhos, comprovante em bobina de 80 mm, estoque com histórico de cada movimento e fechamento cego do turno por forma de pagamento. Painel do gerente com faturamento e ticket médio, e CI que só libera versão com todos os testes verdes.',
    stack: ['Python', 'Django', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    link: null,
    linkLabel: 'Pronto para implantação',
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
      'Legendas de fala em tempo real (latência < 1,5 s), com tradução simultânea PT/EN/ES, para pessoas surdas e com deficiência auditiva acompanharem aulas, palestras e reuniões. Link compartilhável para até 50 espectadores, sem login nem instalação, com fonte ajustável, alto contraste e exportação do texto da sessão.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Docker'],
    link: 'https://legenda-viva.vercel.app/',
    linkLabel: 'Ver projeto ao vivo',
  },
  {
    id: 'checkmate',
    name: 'CheckMate',
    tag: 'Desktop · Gestão',
    description:
      'Gestão de academia de Jiu-Jitsu que substitui o controle em papel: atletas e ficha médica, presença por QR Code, mensalidades com aviso de inadimplência, fluxo de caixa e promoção de faixa validando tempo e frequência. Tem ranking gamificado de atletas e responsáveis e sai num instalador único para Windows, sem precisar instalar Java nem banco.',
    stack: ['Java 21', 'JavaFX', 'H2', 'jpackage', 'Inno Setup'],
    link: null,
    linkLabel: 'Pronto para entrega',
  },
  {
    id: 'mcps',
    name: 'Ferramentas de IA (MCP)',
    tag: 'IA · Automação',
    description:
      'Servidores MCP que dão à IA acesso a dados reais: varredura de licitações de tecnologia no PNCP e em diários oficiais de 13 municípios do RN, monitor de saúde do servidor do EitaPDV, radar de notícias de IA e acesso às minhas anotações de projetos.',
    stack: ['TypeScript', 'Node.js', 'MCP SDK', 'Playwright'],
    link: null,
    linkLabel: 'Em uso diário',
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
    id: 'helena-kids',
    name: 'Helena Kids',
    tag: 'Catálogo · E-commerce · Moda Infantil',
    description:
      'Catálogo de roupa infantil com filtro por tamanho e sacola que fecha o pedido direto no WhatsApp da loja.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://helenakids.vercel.app/',
    linkLabel: 'Ver site ao vivo',
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
]
