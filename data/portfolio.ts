export const profile = {
  name: "João Fernandes",
  role: "Desenvolvedor Full Stack",
  github: "https://github.com/ja1rocambole",
  linkedin: "https://www.linkedin.com/in/joao-fernandes-da-silva-neto/",
  summary:
    "Construindo aplicações web e desktop de alto desempenho no ecossistema JS, potencializado por engenharia com Inteligência Artificial.",
};

export const skills = [
  // Core Full Stack (JS / TS)
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Vue.js",
  "Tailwind CSS",
  "Styled Components",
  "HTML / CSS",

  // Qualidade, Testes & DevOps
  "TDD (Jest)",
  "Docker & Docker Compose",
  "CI/CD (GitHub Actions)",
  "Vercel",
  "Git & GitHub",
  "Clean Code & Arquitetura MVC",

  // Desenvolvimento Assistido por IA (Diferencial)
  "GitHub Copilot & IA Assistants",
  "Engenharia de Prompts para Devs",
  "Refatoração & Testes com IA",

  // Bancos de Dados & APIs
  "PostgreSQL",
  "SQLite",
  "MySQL",
  "APIs RESTful",

  // Ferramentas & Metodologias
  "VS Code",
  "Postman / Insomnia",
  "Terminal Linux",
  "Scrum & Kanban",
];

export const experiences = [
  {
    company: "CS-Consoft",
    role: "Desenvolvedor Frontend",
    period: "Set/2025 - Dez/2025",
    description:
      "Atuação na modernização de sistemas legados com Vue.js, integração de interfaces com APIs RESTful e identificação de requisitos de negócio para otimização de fluxos e contratos de API.",
  },
];

export const projects = [
  {
    slug: "pdv-oficina",
    image: "/projetos/pdv-oficina.svg",
    title: "PDV-Oficina",
    description:
      "Sistema desktop completo para gestão operacional e fluxo de caixa de oficina mecânica.",
    details:
      "Aplicação criada para centralizar a operação de uma oficina, cobrindo cadastro de clientes, veículos, equipe, ordens de serviço, controle de estoque e vendas. A interface em React conversa com a camada do Electron via comunicação IPC assíncrona, e todos os dados são persistidos localmente com SQLite via better-sqlite3, garantindo alta performance offline e segurança dos dados do estabelecimento.",
    tags: [
      "Electron",
      "React",
      "SQLite",
      "Node.js",
      "TypeScript",
      "Ant Design",
    ],
    repo: "https://github.com/joaofernandes/pdv-oficina",
  },
  {
    slug: "clone-tabnews",
    image: "/projetos/clone-tabnews.svg",
    title: "Clone do TabNews",
    description:
      "Plataforma web colaborativa end-to-end com foco em engenharia de software e qualidade.",
    details:
      "Projeto desenvolvido durante o Curso.dev para aplicar conceitos avançados de desenvolvimento full-stack. Conta com autenticação/autorização, sistema de publicação e respostas, segurança de senhas e banco de dados PostgreSQL com migrations automatizadas. A aplicação foi construída com práticas rigorosas de TDD (Jest), conteinerização completa em ambiente Docker e esteira de CI/CD via GitHub Actions com deploy automatizado na Vercel.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Jest", "CI/CD"],
    repo: "https://github.com/joaofernandes/clone-tabnews",
  },
];
