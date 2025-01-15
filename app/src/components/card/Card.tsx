import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

interface CardProps {
  imageSrc: string; // URL da imagem
  paragraph: string; // Texto do parágrafo
  heading: string; // Texto do h4
  to: string; // Rota para onde o usuário será redirecionado
}

export default function Card({ imageSrc, paragraph, heading, to }: CardProps) {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleCardClick = () => {
    navigate(to); // Navega para a página indicada pelo to
  };

  return (
    <div
      className="w-[340px] h-[420px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-200 ease-in-out m-8 cursor-pointer hover:scale-105 hover:z-10"
      onClick={handleCardClick}
    >
      <img src={imageSrc} alt="Card" className="w-full h-[340px] object-cover" />
      <div className="h-[80px] p-2 flex flex-col justify-between bg-gray-100 text-center">
        <p className="text-sm text-gray-600 m-0">{paragraph}</p>
        <h3 className="text-lg font-bold text-gray-800 m-0">{heading}</h3>
      </div>
    </div>
  );
}
