import { Project, TimelineEntry } from "@shared/schema";

export const projects: Project[] = [
    {
        id: 1,
        title: "Apple Store",
        category: "Front-end",
        description: "E-commerce moderno inspirado na Apple com React, TypeScript e Tailwind.",
        longDescription: "Uma aplicação web moderna e responsiva de e-commerce inspirada no design minimalista e elegante da Apple. Desenvolvida com React 19, TypeScript, Vite e Tailwind CSS. Conta com carrinho global (Context API), animações fluidas (Framer Motion), Lazy Loading, notificações Toast e design totalmente responsivo.",
        image: "/assets/Apple_homepage.png",
        gif: "/assets/apple_website_scroll.gif",
        demoUrl: "https://projeto-apple-flax.vercel.app",
        githubUrl: "https://github.com/EmersonSinezio/ProjetoApple",
        howToRun: [
            "Clone o repositório: git clone https://github.com/EmersonSinezio/ProjetoApple.git",
            "Instale as dependências: npm install",
            "Execute o servidor: npm run dev",
            "Acesse: http://localhost:5173"
        ],
        screenshots: [],
        techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Context API"],
        tags: ["E-commerce", "UI/UX", "Animations", "Responsive"]
    },
    {
        id: 2,
        title: "Foody Delivery",
        category: "Front-end",
        description: "Interface moderna para um aplicativo de delivery de comida.",
        longDescription: "Aplicação web para delivery de comida com interface intuitiva e moderna. Inclui listagem de restaurantes, cardápios e carrinho de compras.",
        image: "/assets/Foody_homepage.png",
        gif: "/assets/foody_website_scroll.gif",
        demoUrl: "https://foody-pearl-alpha.vercel.app/",
        githubUrl: "https://github.com/EmersonSinezio/Foody",
        howToRun: [],
        screenshots: [],
        techStack: ["React", "Styled Components"],
        tags: ["Food", "Delivery", "App"]
    },
    {
        id: 3,
        title: "Sneakers Premium",
        category: "Front-end",
        description: "E-commerce moderno de sneakers com Next.js 15, TypeScript e Zustand.",
        longDescription: "Uma aplicação web moderna e responsiva de e-commerce focada em sneakers exclusivos, desenvolvida com Next.js 15 (App Router) e TypeScript. Conta com carrinho de compras global gerenciado pelo Zustand, animações fluidas com Framer Motion, notificações Toast, rotas dinâmicas e design totalmente responsivo.",
        image: "/assets/Sneakers_Homepage.jpg",
        gif: "/assets/sneakers_website_scroll.gif",
        demoUrl: "https://sneakers-gamma-teal.vercel.app",
        githubUrl: "https://github.com/EmersonSinezio/Sneakers",
        howToRun: [
            "Clone o repositório: git clone https://github.com/EmersonSinezio/Sneakers.git",
            "Instale as dependências: npm install",
            "Execute o servidor: npm run dev",
            "Acesse: http://localhost:3000"
        ],
        screenshots: [],
        techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Sonner"],
        tags: ["E-commerce", "Next.js", "Zustand", "Tailwind"]
    },
    {
        id: 4,
        title: "DayNotes",
        category: "Back-end",
        description: "Aplicação fullstack para gerenciamento de anotações diárias com sistema de autenticação robusto e criptografia de dados.",
        longDescription: "Aplicação fullstack para gerenciamento de anotações diárias com sistema de autenticação robusto e criptografia de dados. Cada usuário tem acesso exclusivo às suas notas com total privacidade e segurança. Conta com autenticação JWT, validação forte de senhas, criptografia de dados sensíveis e barra de força de senha em tempo real.",
        image: "/assets/dayNotes_home.jpg",
        gif: "",
        demoUrl: "https://day-notes-client.vercel.app",
        githubUrl: "https://github.com/EmersonSinezio/DayNotes",
        howToRun: [
            "Clone o repositório: git clone https://github.com/EmersonSinezio/DayNotes.git",
            "Configure o backend: cd backend && npm install && cp .env.example .env",
            "Configure o frontend: cd ../frontend && npm install && cp .env.example .env",
            "Inicie os serviços: npm run dev (backend) e npm start (frontend)",
            "Acesse: http://localhost:3000"
        ],
        screenshots: [],
        techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
        tags: ["Fullstack", "Security", "Auth", "Encryption"]
    },
    {
        id: 5,
        title: "Sistema de Gestão de Produtos",
        category: "Back-end",
        description: "Aplicação desktop completa em Java + JavaFX para gerenciamento de estoque com PostgreSQL.",
        longDescription: "Aplicação desktop para gerenciamento de estoque desenvolvida em Java e JavaFX. O sistema oferece um CRUD completo (Criação, Leitura, Atualização e Remoção) com persistência de dados em PostgreSQL via JDBC. Conta com interface gráfica construída em FXML, edição intuitiva através de janelas modais e segurança de credenciais com Dotenv. Projeto focado na integração entre interface gráfica e banco de dados relacional.",
        image: "/assets/gestao_produtos.png",
        gif: "",
        demoUrl: "",
        githubUrl: "https://github.com/EmersonSinezio/GestaoProdutos",
        howToRun: [
            "Pré-requisitos: Java JDK 22, Maven, PostgreSQL 15+, Git",
            "Configure o banco de dados PostgreSQL criando a database 'gestao_produtos' e a tabela 'produtos'.",
            "Crie um arquivo .env na raiz com as credenciais do banco (POSTGRES_URL, POSTGRES_USER, POSTGRES_PASSWORD).",
            "Compile o projeto: mvn clean compile",
            "Execute a aplicação: mvn javafx:run"
        ],
        screenshots: [],
        techStack: ["Java", "JavaFX", "PostgreSQL", "JDBC", "Maven"],
        tags: ["Desktop", "CRUD", "Database", "Java"]
    }
];

export const timeline: TimelineEntry[] = [
    {
        id: 1,
        type: "experience",
        title: "Estagiário de Tecnologia e Negócios",
        organization: "Gagliardi Distribuidora de Lubrificantes LTDA",
        location: "Fortaleza - CE",
        startDate: "2025-09-01",
        description: "Suporte a sistemas internos (ERP), monitoramento de acessos e infraestrutura de redes. Desenvolvimento de scripts para automação de rotinas simples de TI. Resolução de chamados técnicos e garantia de disponibilidade dos serviços críticos.",
        technologies: ["ERP", "Infraestrutura", "Automação", "Suporte TI"]
    },
    {
        id: 2,
        type: "experience",
        title: "Jovem Aprendiz - Setor de Tecnologia",
        organization: "Gagliardi Distribuidora de Lubrificantes LTDA",
        location: "Fortaleza - CE",
        startDate: "2024-07-01",
        endDate: "2025-09-01",
        description: "Suporte básico a sistemas corporativos e manutenção preventiva de infraestrutura. Triagem de chamados e gestão de contas de tecnologia.",
        technologies: ["Suporte", "Manutenção", "Gestão de Contas"]
    },
    {
        id: 3,
        type: "education",
        title: "Análise e Desenvolvimento de Sistemas",
        organization: "Centro Universitário Estácio de Sá",
        location: "Fortaleza - CE",
        startDate: "2024-01-01",
        endDate: "2026-12-31",
        description: "Cursando o 4º período. Foco em desenvolvimento de software, análise de sistemas e engenharia de software.",
        technologies: ["Java", "SQL", "Engenharia de Software", "POO"]
    },
    {
        id: 4,
        type: "education",
        title: "Formação Full Stack",
        organization: "C-Jovem (Governo do Ceará/Capacita Brasil)",
        location: "Fortaleza - CE",
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        description: "Formação intensiva em desenvolvimento Full Stack com foco em tecnologias modernas e práticas de mercado.",
        technologies: ["Full Stack", "Web Development", "React", "Node.js"]
    }
];

export function getProject(id: number | string): Project | undefined {
    const numId = typeof id === "string" ? parseInt(id, 10) : id;
    return projects.find((p) => p.id === numId);
}
