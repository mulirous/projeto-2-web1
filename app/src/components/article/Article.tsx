import "./Article.css"

interface ArticleProps {
    imageSrc: string; // URL da imagem
    paragraph: string; // Texto do parágrafo
    heading: string; // Texto do h4
    typeOne: string;
    typeTwo: string;
    ownerImage: string;
    owner: string; // Rota para onde o usuário será redirecionado
  }

export default function Article({ imageSrc, paragraph, heading, typeOne, typeTwo, ownerImage, owner } : ArticleProps) {
    return (
        <div className="article">
            <img src={imageSrc} alt="ALGUMA IMAGEM" className="articleImage" />
            <div className="articleText">
                <h3>{heading}</h3>
                <p>{paragraph}</p>
                <div className="articleTypes">
                    <div className="type">
                        <p>{typeOne}</p>
                    </div>
                    <div className="type">
                        <p>{typeTwo}</p>
                    </div>
                </div>
                <div className="articleOwner">
                    <img src={ownerImage} alt="ALGUMA IMAGEM" className="articleOwnerImage" />
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    );
}