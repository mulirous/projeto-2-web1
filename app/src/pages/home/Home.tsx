import Layout from "../../layout/Layout";
import Searchbar from "../../components/searchbar/Searchbar";
import Botao from "../../components/botao/Botao";
import Card from "../../components/card/Card";
import Article from "../../components/article/Article";
import Review from "../../components/review/Review";

import "./Home.css"

export default function Home() {
    return (
        <Layout>
            <div className="initialSearch">
                <div className="initialSearchText">
                    <h1>Vamos Aprender Algo Novo Hoje</h1>
                    <p>Confira nossos mais diversos cursos para agregar conhecimento</p>
                </div>
                <div className="initialSearchInput">
                    <Searchbar />
                </div>
                <div className="initialSearchButtons">
                    <Botao to="/login" className="loginButton">Entrar</Botao>
                    <Botao to="/registro" className="registroButton">Registre-se</Botao>
                </div>
            </div> 
            <div className="newCourses">
                <div className="newCoursesHeader">
                    <img src="https://e7.pngegg.com/pngimages/522/461/png-clipart-computer-icons-academic-certificate-certification-diploma-training-course-computer-program-academic-certificate-thumbnail.png" alt="ALGUMA IMAGEM COMUM" className="newCoursesImg" />
                    <h1>Novos Cursos</h1>
                </div>
                <div className="newCoursesCards">
                    <Card
                    imageSrc="https://idocode.com.br/wp-content/uploads/2021/07/pexels-luis-gomes-546819-scaled.jpg"
                    paragraph="Curso de Programação"
                    heading="Iniciante"
                    to="/curso/:id"
                    />
                    <Card
                    imageSrc="https://cruzeirodosul.vtexassets.com/arquivos/ids/161141-800-auto?v=638621733646970000&width=800&height=auto&aspect=true"
                    paragraph="Curso de Design"
                    heading="Intermediário"
                    to="/curso/:id"
                    />
                    <Card
                    imageSrc="https://itec.net.br/projeto2018/wp-content/uploads/2018/02/planejar-palestra-marketing-e-vendas.jpg"
                    paragraph="Curso de Marketing"
                    heading="Avançado"
                    to="/curso/:id"
                    />
                </div>
            </div>
            <div className="newContent">
                <div className="newContentHeader">
                <h1>Conteúdo Recente</h1>
                <img src="https://static.vecteezy.com/system/resources/previews/019/787/026/non_2x/fire-icon-on-transparent-background-free-png.png" alt="ALGUMA IMAGEM" className="newContentImg" />
                </div>
                <div className="newContentArticles">
                    <Article
                    imageSrc="https://www.unit.br/hs-fs/hubfs/Blog%20Unit%20(SEO)/moca-treinando-como-falar-bem-em-publico.jpg?width=800&height=533&name=moca-treinando-como-falar-bem-em-publico.jpg"
                    heading="Arte de Falar em Público"
                    paragraph="Descubra dicas e técnicas para melhorar suas habilidades de falar em público."
                    typeOne="comunicação"
                    typeTwo="Soft Skill"
                    ownerImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgh4icKiWX52T9RrRkmUaJjkSX9eFOTet8tA&s"
                    owner="John Doe"
                    />
                    <Article
                    imageSrc="https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2019/03/DALL·E-2024-04-23-22.37.30-A-cartoon-style-realistic-image-of-a-humanoid-robot-reading-a-book-representing-artificial-intelligence-learning.-This-alternative-depiction-shows-t.webp?resize=660%2C660&ssl=1"
                    heading="Introdução a Aprendizado de Máquina"
                    paragraph="Aprenda os fundamentos do aprendizado de máquina e suas aplicações em diversos setores."
                    typeOne="Técnologia"
                    typeTwo="Ciência de Dados"
                    ownerImage="https://www.inpev.org.br/wp-content/uploads/2024/03/ec0db4e5-e9ae-4bb6-a132-8f2441a8beda.jpeg"
                    owner="Bruno Moura"
                    />
                </div>
            </div>
            <div className="reviews">
                    <div className="reviewsText">
                        <h1>Reviews dos Estudantes</h1> 
                    </div>
                    <div className="reviewStudents">
                        <Review 
                        imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                        owner="Davi Brito"
                        paragraph="Os instrutores são muito atenciosos e explicam os conceitos de forma clara e objetiva. Estou adorando os cursos e já vejo resultados no meu aprendizado."
                        />
                        <Review 
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQw7o3gAe_kpg-141T85YmA_8Zm_DxEB_YkQ&s"
                        owner="Alice Papera"
                        paragraph="Cada módulo é detalhado e fácil de seguir, com exemplos práticos que ajudam a fixar o conteúdo. Estou muito satisfeito com o material oferecido."
                        />
                        <Review 
                        imageSrc="https://avatarfiles.alphacoders.com/108/thumb-1920-108839.gif"
                        owner="Pedro Paulo"
                        paragraph="Os cursos são bem estruturados e oferecem material de alta qualidade, facilitando o aprendizado. Super recomendo para quem quer aprender de forma prática e eficaz!"
                        />
                        <Review 
                        imageSrc="https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg"
                        owner="Yasmin Teixeira"
                        paragraph="Plataforma incrível! os recursos interativos e o suporte da equipe fazem toda a diferença. Os cursos são muito completos e valem cada minuto investido."
                        />
                    </div>
                </div>
        </Layout>
    );
  }
  