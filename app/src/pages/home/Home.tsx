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
                    <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="ALGUMA IMAGEM COMUM" className="newCoursesImg" />
                    <h1>Novos Cursos</h1>
                </div>
                <div className="newCoursesCards">
                    <Card
                    imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    paragraph="Curso de Programação"
                    heading="Iniciante"
                    to="/curso/:id"
                    />
                    <Card
                    imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    paragraph="Curso de Design"
                    heading="Intermediário"
                    to="/curso/:id"
                    />
                    <Card
                    imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    paragraph="Curso de Marketing"
                    heading="Avançado"
                    to="/curso/:id"
                    />
                </div>
            </div>
            <div className="newContent">
                <div className="newContentHeader">
                <h1>Conteúdo Recente</h1>
                <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="ALGUMA IMAGEM" className="newContentImg" />
                </div>
                <div className="newContentArticles">
                    <Article
                    imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    heading="Arte de Falar em Público"
                    paragraph="Descubra dicas e técnicas para melhorar suas habilidades de falar em público."
                    typeOne="comunicação"
                    typeTwo="Soft Skill"
                    ownerImage="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    owner="John Doe"
                    />
                    <Article
                    imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    heading="Introdução a Aprendizado de Máquina"
                    paragraph="Aprenda os fundamentos do aprendizado de máquina e suas aplicações em diversos setores."
                    typeOne="Técnologia"
                    typeTwo="Ciência de Dados"
                    ownerImage="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                    owner="Jane Smith"
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
                        owner="Alice Johnson"
                        paragraph="Adorei o conteúdo do curso e a forma como foi apresentado. Recomendo"
                        />
                        <Review 
                        imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                        owner="Alice Johnson"
                        paragraph="Adorei o conteúdo do curso e a forma como foi apresentado. Recomendo"
                        />
                        <Review 
                        imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                        owner="Alice Johnson"
                        paragraph="Adorei o conteúdo do curso e a forma como foi apresentado. Recomendo"
                        />
                        <Review 
                        imageSrc="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
                        owner="Alice Johnson"
                        paragraph="Adorei o conteúdo do curso e a forma como foi apresentado. Recomendo"
                        />
                    </div>
                </div>
        </Layout>
    );
  }
  