interface ArticleProps {
    imageSrc: string; // URL da imagem
    paragraph: string; // Texto do parágrafo
    heading: string; // Texto do h4
    typeOne: string;
    typeTwo: string;
    ownerImage: string;
    owner: string; // Rota para onde o usuário será redirecionado
}

export default function Article({
  imageSrc, 
  paragraph, 
  heading, 
  typeOne, 
  typeTwo, 
  ownerImage, 
  owner 
}: ArticleProps) {
    return (
        <div className="flex p-4 w-[530px] h-[190px] border border-gray-300 hover:scale-105 transition-all">
            <img src={imageSrc} alt="ALGUMA IMAGEM" className="w-[100px] h-[100px] object-cover" />
            <div className="ml-8">
                <h3 className="text-lg font-semibold">{heading}</h3>
                <p className="text-sm">{paragraph}</p>
                <div className="flex space-x-2 mt-2">
                    <div className="bg-gray-100 px-2 py-1 text-xs">{typeOne}</div>
                    <div className="bg-gray-100 px-2 py-1 text-xs">{typeTwo}</div>
                </div>
                <div className="flex items-center mt-3">
                    <img src={ownerImage} alt="Owner" className="w-[20px] h-[20px] object-cover rounded-full mr-4" />
                    <p className="text-sm">{owner}</p>
                </div>
            </div>
        </div>
    );
}
