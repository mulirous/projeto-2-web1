import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import './Card.css';

interface CardProps {
  imageSrc: string; // URL da imagem
  paragraph: string; // Texto do parágrafo
  heading: string; // Texto do h4
  to: string; // Rota para onde o usuário será redirecionado
}

export default function Card({ imageSrc, paragraph, heading, to }: CardProps) {
  const navigate = useNavigate();  // Inicializa o hook de navegação

  const handleCardClick = () => {
    navigate(to); // Navega para a página indicada pelo to
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-caption">
        <p>{paragraph}</p>
        <h3>{heading}</h3>
      </div>
    </div>
  );
}
