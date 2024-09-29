// src/mockData/data.js

import Image1 from "../assets/tabs/boxe.png";
import Image2 from "../assets/tabs/treino.png";
import Image3 from "../assets/tabs/dança.png";
import Image4 from "../assets/tabs/personal.png";
import Image5 from "../assets/tabs/whey.png";
import Image6 from "../assets/tabs/comer.png";

export const NavbarMenu = [
  {
    id: 1,
    title: "Página Principal",
    link: "/index.html", // Link para a página inicial
  },
  {
    id: 2,
    title: "Sobre nós",
    link: "#",
  },
  {
    id: 3,
    title: "Planos",
    link: "#",
  },
  {
    id: 4,
    title: "Modalidades",
    link: "#",
  },
  {
    id: 5,
    title: "Contate-nos",
    link: "#",
  },
  {
    id: 6, // Novo Item Adicionado
    title: "Comentários",
    link: "/index2.html", // Link para a segunda página
  },
];

export const ProductsData = [
  {
    id: 1,
    category: "Boxe",
    image: Image1,
    title: "Aulas de boxe",
    info: "Luvas de boxe profissionais, feitas de couro sintético, ideais para treinos e competições.",
    price: "R$ 200",
  },
  {
    id: 2,
    category: "Musculação",
    image: Image2,
    title: "Musculação",
    info: "Halteres de alta qualidade para musculação e fortalecimento muscular.",
    price: "R$ 500",
  },
  {
    id: 3,
    category: "Dança",
    image: Image3,
    title: "Aulas de dança",
    info: "Saco de pancadas resistente, com enchimento de areia e tecido, perfeito para treinos de boxe.",
    price: "R$ 800",
  },
  {
    id: 4,
    category: "Serviços de personal",
    image: Image4,
    title: "Personal trainer",
    info: "Tapete multifuncional para alongamentos e exercícios físicos.",
    price: "R$ 300",
  },
  {
    id: 5,
    category: "Suplementação",
    image: Image5,
    title: "Dicas de suplementos",
    info: "Tapete multifuncional para alongamentos e exercícios físicos.",
    price: "R$ 300",
  },
  {
    id: 6,
    category: "Suplementação",
    image: Image6,
    title: "Dicas de alimentos",
    info: "Suplementos alimentares de alta qualidade para suporte nutricional e aumento de desempenho.",
    price: "R$ 150",
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "João Silva",
    text: "Este lugar é incrível! O atendimento é excelente e os equipamentos são de primeira qualidade.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Carlos Pereira",
    text: "Adorei a academia, o ambiente é super agradável e motivador. Recomendo a todos!",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Fernanda Costa",
    text: "Profissionais qualificados e uma ótima estrutura. O melhor lugar para treinar!",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana Souza",
    text: "Melhor experiência de treino que já tive! Resultados excelentes e rápido!",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];