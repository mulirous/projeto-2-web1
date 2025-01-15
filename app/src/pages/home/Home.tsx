import Layout from "../../layout/Layout";
import Searchbar from "../../components/searchbar/Searchbar";
import Botao from "../../components/botao/Botao";
import Card from "../../components/card/Card";
import Article from "../../components/article/Article";
import Review from "../../components/review/Review";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-full h-[771px] bg-black opacity-60">
                <div className="text-center text-gray-300 pt-[100px]">
                    <h1 className="font-bold text-[50px]">Vamos Aprender Algo Novo Hoje</h1>
                    <p>Confira nossos mais diversos cursos para agregar conhecimento</p>
                </div>
                <div className="pt-6">
                    <Searchbar />
                </div>
                <div className="mt-8 flex gap-8">
                    <Botao to="/login" className="px-[100px] py-[12px] text-white border border-white rounded-lg font-bold">Entrar</Botao>
                    <Botao to="/registro" className="px-[100px] py-[12px] text-white bg-black border border-white rounded-lg font-bold">Registre-se</Botao>
                </div>
            </div> 
            
            <div className="my-12 px-8 text-center">
                <div className="flex items-center mb-10 pl-12">
                    <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="ALGUMA IMAGEM COMUM" className="w-[50px] h-[50px] mr-4 object-cover" />
                    <h1>Novos Cursos</h1>
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
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

            <div className="my-16">
                <div className="flex justify-between items-center px-[170px] mb-8">
                    <h1>Conteúdo Recente</h1>
                    <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="ALGUMA IMAGEM" className="w-[180px] h-[180px] object-cover" />
                </div>
                <div className="flex justify-around px-[170px] mt-8">
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

            <div className="max-h-[420px] px-[170px] py-16 flex flex-col items-center">
                <div className="text-center mb-6">
                    <h1>Reviews dos Estudantes</h1>
                </div>
                <div className="flex flex-wrap justify-between gap-5 w-full">
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
