// Todo o texto da página inicial fica aqui, para facilitar a troca de conteúdo.

export const site = {
  nome: "Estúdio Exemplo",
  email: "contato@estudioexemplo.com.br",
  ano: 2026,
};

export const menu = [
  { label: "Design de Sites", href: "#design" },
  { label: "Desenvolvimento", href: "#desenvolvimento" },
  { label: "Parcerias", href: "#parcerias" },
  { label: "Marketing Digital", href: "#marketing" },
  { label: "Cases", href: "#cases" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export type Depoimento = {
  texto: string;
  nome: string;
  origem: string;
};

export const depoimentos: Depoimento[] = [
  {
    texto:
      "A equipe entendeu a tarefa logo de início e captou a visão do negócio com muita precisão.",
    nome: "Nome do Cliente 1",
    origem: "Empresa A",
  },
  {
    texto:
      "Respostas rápidas ao feedback e um briefing compreendido de verdade. Processo sem retrabalho.",
    nome: "Nome do Cliente 2",
    origem: "Empresa B",
  },
  {
    texto:
      "O resultado final transmite exatamente quem somos. Recomendo sem hesitar.",
    nome: "Nome do Cliente 3",
    origem: "Empresa C",
  },
  {
    texto:
      "Velocidade, profissionalismo e um preço justo. Hoje cuidam também do código do nosso site.",
    nome: "Nome do Cliente 4",
    origem: "Empresa D",
  },
];

export const hero = {
  titulo: "Design de sites que comunica o seu negócio — e não só parece bonito",
  subtitulo:
    "Alinhamos metas de negócio, prioridades de comunicação e direção de design antes de qualquer tela, para que o site reflita a sua empresa e não apenas o briefing.",
  botaoPrimario: "Conheça nosso processo",
  botaoSecundario: "Veja nossos projetos",
};

export const problema = {
  titulo: "Se você já trabalhou com designers de sites, isso vai soar familiar",
  dores: [
    "O design é bonito, mas não parece com o nosso negócio.",
    "Revisões sem fim tentando alinhar o visual à empresa.",
    "Cada designer interpreta o mesmo briefing de um jeito.",
    "Visual forte, mas comunicação pouco clara.",
    "A estrutura da home muda a cada etapa do projeto.",
  ],
  transicao:
    "A maioria dos problemas em projetos de site não nasce na criatividade, e sim em interpretações diferentes de metas, prioridades e direção.",
};

export const abordagem = {
  titulo: "Como abordamos o design de sites",
  cards: [
    {
      titulo: "Entendimento compartilhado",
      itens: [
        "Metas de negócio",
        "Prioridades de comunicação",
        "Expectativas do público-alvo",
        "Direção geral de design",
      ],
    },
    {
      titulo: "Tradução estruturada do design",
      itens: [
        "Estrutura da página inicial",
        "Hierarquia de conteúdo",
        "Direção visual",
        "Personalidade do design",
      ],
    },
    {
      titulo: "Revisão apoiada por IA",
      texto:
        "Usamos sistemas internos de IA para checar interpretação, consistência e clareza. As decisões de negócio e a criatividade continuam sendo humanas.",
    },
  ],
  botao: "Veja o processo completo",
};

export const inteligencia = {
  titulo: "Inteligência antes da criatividade",
  texto:
    "Usamos IA para ganhar clareza antes de criar, sem substituir o pensamento criativo da equipe.",
  itens: [
    {
      titulo: "Análise estruturada do briefing",
      texto:
        "Cada briefing passa por um roteiro interno de análise, apoiado por IA.",
    },
    {
      titulo: "Entendimento comum antes do criativo",
      texto:
        "A IA organiza e valida as informações para que todos comecem do mesmo ponto.",
    },
    {
      titulo: "Decisões de design lideradas por pessoas",
      texto:
        "Estratégia, direção criativa e escolhas de design permanecem humanas.",
    },
  ],
  botao: "Veja como transformamos entendimento em design melhor",
};

export const solucoes = {
  titulo: "Soluções de design de sites para diferentes necessidades",
  categorias: [
    {
      titulo: "Sites institucionais e de marca",
      descricao:
        "Comunicam o negócio, criam credibilidade e fortalecem o posicionamento.",
      publicos: [
        "Serviços profissionais",
        "Empresas B2B",
        "Agências",
        "Consultores",
        "Empresas consolidadas",
      ],
      projetos: 6,
    },
    {
      titulo: "Sites complexos e ricos em informação",
      descricao:
        "Transformam informação densa em experiências claras e fáceis de navegar.",
      publicos: [
        "Empresas técnicas",
        "Prestadores especializados",
        "Instituições de ensino",
        "Saúde e organizações profissionais",
      ],
      projetos: 4,
    },
    {
      titulo: "E-commerce e experiências de produto",
      descricao:
        "Apresentação de produto, experiência de uso, confiança e conversão.",
      publicos: [
        "Marcas de consumo",
        "Empresas de produto",
        "Vendas diretas ao consumidor",
        "Varejistas",
        "Lojas virtuais",
      ],
      projetos: 5,
    },
  ],
};

export const cases = {
  titulo: "Comprovado em projetos e experiências reais de clientes",
  itens: [
    {
      cliente: "Cliente Alfa",
      titulo:
        "Um aplicativo de apoio que transforma um ingresso em uma jornada interativa.",
      descricao: "Descrição provisória do projeto, que será substituída.",
      segmento: "Aplicativos",
      servicos: ["Estratégia de produto", "UX", "UI"],
      foco: ["Engajamento", "Experiência de produto"],
    },
    {
      cliente: "Cliente Beta",
      titulo:
        "Uma experiência para agência que conecta pelo propósito antes do portfólio.",
      descricao: "Descrição provisória do projeto, que será substituída.",
      segmento: "Criatividade",
      servicos: ["Estratégia de UX", "UI", "Arquitetura de informação"],
      foco: ["Narrativa de marca", "Confiança"],
    },
    {
      cliente: "Cliente Gama",
      titulo:
        "Uma experiência SaaS que demonstra valor antes de pedir o cadastro.",
      descricao: "Descrição provisória do projeto, que será substituída.",
      segmento: "SaaS",
      servicos: ["Estratégia de UX", "UI", "Arquitetura de informação"],
      foco: ["Clareza do produto", "Conversão"],
    },
  ],
  botao: "Explore mais projetos",
};

export const sobre = {
  titulo: "Sobre o Estúdio Exemplo",
  texto:
    "Há mais de 15 anos trabalhamos com empresas e agências no Brasil e no exterior. Nossa filosofia é criar clareza antes da execução.",
  subtitulo: "Seu próximo projeto de site",
  chamada: "Liderança de design experiente. Execução em equipe estruturada.",
  cards: [
    {
      titulo: "Liderança criativa",
      texto: "Direção criativa com mais de 20 anos de experiência.",
    },
    {
      titulo: "Equipe especializada em sites",
      texto: "Time dedicado, com média de 7 anos de experiência.",
    },
    {
      titulo: "Expertise ampliada",
      texto: "Especialistas em marca, comunicação visual e design digital.",
    },
  ],
  confiancaTitulo: "Por que empresas confiam em nossa equipe",
  estatisticas: [
    "Reconhecimento de nível máximo em plataformas de design",
    "Centenas de conceitos de design vencedores",
    "15+ anos de experiência em design de sites",
    "Empresas e agências de vários mercados",
  ],
};

export const formulario = {
  titulo: "Vamos começar pelo entendimento",
  texto:
    "Antes de qualquer design, queremos entender o seu negócio. Conte um pouco sobre o que você precisa.",
  servicos: [
    "Design de sites",
    "Desenvolvimento de sites",
    "Parceria white-label",
    "Marketing digital",
    "Outros",
  ],
};

export const rodape = {
  titulo: "Comece com clareza",
  descricao:
    "Parceiro de execução digital que ajuda agências e empresas a criar clareza e reduzir incertezas.",
  capacidades: [
    "Design de sites",
    "Desenvolvimento",
    "Parcerias white-label",
    "Marketing digital",
  ],
  empresa: ["Início", "Cases", "Depoimentos", "Contato"],
  numeros: [
    { valor: "15+", rotulo: "Anos" },
    { valor: "500+", rotulo: "Projetos" },
    { valor: "Nível máximo", rotulo: "Reconhecimento" },
    { valor: "Multi-ano", rotulo: "Parcerias com agências" },
  ],
};
