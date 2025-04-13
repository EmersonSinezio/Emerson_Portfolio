interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tecs: string;
  link: string;
  type: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Foody",
    description: "Esse projeto é um website de restaurante feito com React.",
    image: "./assets/Foody_homepage.png",
    tecs: "React | Tailwind CSS | Context",
    link: "https://foody-pearl-alpha.vercel.app/",
    type: "Front-end",
  },
  {
    id: 2,
    title: "Apple",
    description: "Esse projeto é um e-commerce de celulares feito com React.",
    image: "./assets/Apple_homepage.png",
    tecs: "React | Tailwind CSS",
    link: "https://projeto-apple-sandy.vercel.app/",
    type: "Front-end",
  },
  {
    id: 3,
    title: "Sneakers",
    description: "Este projeto é um e-commerce de calçados feito com NextJS.",
    image: "./assets/Sneakers_Homepage.png",
    tecs: "NextJS | Css Modules",
    link: "https://sneakers-opal-alpha.vercel.app/",
    type: "Front-end",
  },
  {
    id: 4,
    title: "Gerenciador de Senhas",
    description:
      "Este projeto é uma aplicação simples para gerenciar senhas de forma segura, utilizando criptografia.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tecs: "Python",
    link: "https://github.com/EmersonSinezio/Gerenciador-de-senhas",
    type: "Back-end",
  },
  {
    id: 5,
    title: "Indisponivel",
    description:
      "Este projeto está em fase de desenvolvimento e estará disponível em breve.",
    image: "https://dummyimage.com/720x400",
    tecs: "",
    link: "#",
    type: "",
  },
  {
    id: 6,
    title: "Indisponivel",
    description:
      "Este projeto está em fase de desenvolvimento e estará disponível em breve.",
    image: "https://dummyimage.com/720x400",
    tecs: "",
    link: "#",
    type: "",
  },
];
