import { Star } from 'lucide-react'; // Importa o ícone de estrela do lucide

interface ReviewProps {
  imageSrc: string; // URL da imagem
  paragraph: string; // Texto do parágrafo
  owner: string; // Rota para onde o usuário será redirecionado
}

export default function Review({ imageSrc, paragraph, owner }: ReviewProps) {
  return (
    <div className="w-[260px] h-[auto] bg-gray-100 p-4 hover:scale-105 transition-all">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            src={imageSrc}
            alt="Imagem do dono da avaliação"
            className="w-[32px] h-[32px] rounded-full object-cover mr-2"
          />
          <p className="text-sm">{owner}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
          ))}
        </div>
      </div>
      <div className="text-sm">
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
