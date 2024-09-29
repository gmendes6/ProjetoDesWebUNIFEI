import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SegundaPagina = () => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col font-sans">
      {/* Barra de Navegação */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4 font-playfair">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl">
          <h1 className="text-3xl font-bold mb-4 text-center">Comentário sobre o Projeto</h1>
          
          <p className="text-gray-700 text-lg font-playfair">
            Este projeto de faculdade foi desenvolvido com o objetivo de criar uma landing page moderna e totalmente responsiva para uma academia de Itabira, denominada "Academia Endofit". A seguir, detalho os principais pontos e seções desenvolvidas:
          </p>

          {/* Seção "O que temos a oferecer" */}
          <h2 className="text-2xl font-bold mt-6 mb-2">O que temos a oferecer</h2>
          <p className="text-gray-700 text-lg ">
            Nesta seção, apresentamos os principais diferenciais da academia, como a presença de professores qualificados, equipamentos de última geração e suporte completo para treinos e suplementação. Cada item é destacado em uma caixa com ícones e textos explicativos. 
          </p>
          <p className="text-gray-700 text-lg mt-4">
            O layout foi criado de forma simples e visualmente atrativa, com o uso de Tailwind CSS para estilização rápida e consistente. A responsividade foi aplicada para garantir que o conteúdo ficasse acessível e organizado tanto em telas grandes quanto em dispositivos móveis.
          </p>

          {/* Seção "Modalidades" */}
          <h2 className="text-2xl font-bold mt-6 mb-2">Modalidades</h2>
          <p className="text-gray-700 text-lg">
            A segunda parte da página contém uma seção dedicada às modalidades disponíveis na academia, como Boxe, Musculação, Dança e Personal Trainer. Cada modalidade tem uma imagem representativa e uma breve descrição. 
          </p>
          <p className="text-gray-700 text-lg mt-4">
            O desafio foi garantir que as imagens e textos fossem responsivos e ajustáveis a diferentes tamanhos de tela. Usamos Tailwind CSS para aplicar um sistema de grade que se adapta conforme a resolução do dispositivo, permitindo uma exibição clara e organizada das modalidades.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">Motivações</h2>
          <p className="text-gray-700 text-lg">
          A motivação para o desenvolvimento deste projeto decorre da crescente demanda por soluções digitais que atendam às necessidades de academias e seus clientes em um mundo cada vez mais conectado. A "Academia Endofit" se destaca pela busca por inovação e qualidade nos serviços oferecidos, e uma landing page moderna e responsiva é fundamental para refletir essa filosofia.
          </p>

          {/* Seção "Depoimentos" */}
          <h2 className="text-2xl font-bold mt-6 mb-2">Depoimentos dos Alunos</h2>
          <p className="text-gray-700 text-lg">
            A página inclui uma seção com depoimentos de alunos fictícios da academia. Utilizamos imagens e citações para dar um toque de realidade ao projeto, mostrando a experiência positiva dos usuários da academia. 
          </p>
          <p className="text-gray-700 text-lg mt-4">
            A funcionalidade de rotação dos depoimentos foi implementada com o uso de uma pequena animação, e foi necessário garantir que a rotação fosse suave em diferentes dispositivos. A tipografia e o espaçamento foram cuidadosamente ajustados para proporcionar uma leitura agradável em todas as resoluções.
          </p>

          {/* Tecnologias Utilizadas */}
          <h2 className="text-2xl font-bold mt-6 mb-2">Tecnologias Utilizadas</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg mt-4">
            <li><strong>Vite:</strong> Utilizamos o Vite como ferramenta de construção e empacotamento do projeto, o que proporcionou um ambiente de desenvolvimento rápido e eficiente.</li>
            <li><strong>React.js:</strong> A base do projeto foi construída utilizando React.js, um framework moderno que facilita o desenvolvimento de interfaces dinâmicas e reativas.</li>
            <li><strong>Tailwind CSS:</strong> Para a estilização do site, optamos pelo Tailwind CSS, uma biblioteca de classes utilitárias que torna o desenvolvimento de interfaces responsivas mais rápido e consistente.</li>
            <li><strong>Menu Responsivo:</strong> Implementamos um menu de navegação que se adapta a diferentes tamanhos de tela, garantindo uma ótima experiência de usuário tanto em dispositivos móveis quanto em desktops.</li>
            <li><strong>Site Responsivo:</strong> O layout do site foi pensado para ser totalmente responsivo, garantindo que o conteúdo se ajuste adequadamente em dispositivos de diferentes resoluções, desde smartphones até monitores maiores.</li>
            <li><strong>Componentização:</strong> O projeto foi dividido em componentes reutilizáveis, como Navbar, Footer e seções principais, para garantir um código mais organizado e fácil de manter.</li>
          </ul>

          <p className="text-gray-700 text-lg mt-4">
            A ideia principal deste projeto foi criar uma plataforma moderna e responsiva que pudesse ser visualizada em qualquer dispositivo, mantendo a performance e a usabilidade como prioridades.
          </p>
          
          <p className="text-gray-700 text-lg mt-4">
            Agradecemos aos professores e colegas que acompanharam o desenvolvimento deste projeto, fornecendo feedback valioso ao longo do processo.
          </p>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default SegundaPagina;