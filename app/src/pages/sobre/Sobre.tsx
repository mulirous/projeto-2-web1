import Layout from "../../layout/Layout";
import LucasImage from "../../images/lucas.jpg";
import PedroImage from "../../images/pedro.jpg";


import "./Sobre.css"

export default function Sobre() {
  const founders = [
    {
      name: "Pedro Vitor",
      role: "CEO",
      image: PedroImage,
      description:
        "Pedro é o líder visionário da nossa equipe, trazendo consigo décadas de experiência em gestão e inovação. Sua visão estratégica e habilidades de liderança são fundamentais para guiar a equipe e a empresa rumo a novos horizontes, sempre com foco em soluções criativas e eficientes. Sua experiência nos permite enfrentar desafios com confiança e explorar oportunidades com visão de futuro.",
    },
    {
      name: "Lucas Melo",
      role: "CTO",
      image: LucasImage,
      description:
        "Lucas é o responsável pela tecnologia que impulsiona nossa plataforma, liderando o desenvolvimento e a implementação de soluções tecnológicas inovadoras. Seu trabalho incansável em aprimorar os sistemas que sustentam a nossa operação é essencial para manter a empresa na vanguarda do mercado. Com uma mente focada na transformação digital, Lucas garante que a tecnologia seja sempre um diferencial competitivo.",
    },
    {
      name: "Fundador 3",
      role: "Lead Developer",
      image: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png",
      description:
        "Murilo lidera a equipe de desenvolvimento, sendo o pilar que garante a excelência em cada linha de código. Sua atenção aos detalhes técnicos e seu compromisso com a inovação asseguram que todos os projetos sejam entregues com a mais alta qualidade. Murilo se dedica a aprimorar constantemente os processos, trazendo melhorias contínuas e mantendo o padrão de excelência que caracteriza nossa equipe.",
    },
  ];
  return (
    <Layout>
      <h1>Sobre nós</h1>
      <div>
        <section className="about-header">
          <div className="about-container">
            <div className="about-image">
              <img
                className="circle"
                src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                alt="Logo da Instituição"
              />
            </div>
            <div className="about-text">
              <h1>Nome da Instituição</h1>
              <div className="tags">
                <span>Educação</span>
                <span>Tecnologia</span>
              </div>
              <p>Capacitar os alunos através de soluções educacionais inovadoras</p>
            </div>
            <div className="about-button">
              <button>Saiba Mais</button>
            </div>
          </div>
        </section>
        <section className="founders">
          <h2>Conheça os Fundadores</h2>
          <div className="founder-list">
            <div className="founder">
              <img
                src={PedroImage}
                alt="Pedro Vitor"
              />
              <h3>Pedro Vitor</h3>
              <p>CEO</p>
            </div>
            <div className="founder">
              <img
                src={LucasImage}
                alt="Lucas Melo"
              />
              <h3>Lucas Melo</h3>
              <p>CTO</p>
            </div>
            <div className="founder">
              <img
                src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                alt="Fundador 3"
              />
              <h3>Fundador 3</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </section>
        <section className="founders">
          <h2>Conheça os Fundadores</h2>
          <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder-section">
            <img
              className="circle-large"
              src={founder.image}
              alt={founder.name}
            />
            <h2>{founder.name}</h2>
            <h3>{founder.role}</h3>
            <p>{founder.description}</p>
          </div>
        ))}
      </div>
        </section>
      </div>
    </Layout>
  );
}