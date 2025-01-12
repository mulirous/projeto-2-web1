import { Star } from 'lucide-react'; // Importa o ícone de estrela do lucide
import "./Review.css"

interface ReviewProps {
  imageSrc: string; // URL da imagem
  paragraph: string; // Texto do parágrafo
  owner: string; // Rota para onde o usuário será redirecionado
}

export default function Review({ imageSrc, paragraph, owner }: ReviewProps) {
  return (
    <div className="review">
      <div className="reviewHeader">
        <div>
            <img src={imageSrc} alt="Imagem do dono da avaliação" className="reviewImage" />
            <p className="reviewOwner">{owner}</p>
        </div>
        <div className="reviewRating">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={20} color="#FFD700" fill="#FFD700"/> // Cor dourada para as estrelas
        ))}
      </div>
      </div>
      <div className="reviewContent">
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
