import Layout from "../../layout/Layout";
import Searchbar from "../../components/searchbar/Searchbar";
import Botao from "../../components/botao/Botao";
import Card from "../../components/card/Card";
import Article from "../../components/article/Article";
import Review from "../../components/review/Review";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-full h-[771px] bg-[url('https://www.segs.com.br/media/k2/items/cache/34348bbbb981297ffed11a4cdbc6aa9a_XL.jpg')]">
                <div className="flex flex-col items-center justify-center w-full h-full bg-black/65">
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
            </div> 

            <div className="my-12 px-8 text-center">
                <div className="flex items-center mb-10 pl-12">
                    <img src="https://cdn-icons-png.flaticon.com/512/3478/3478115.png" alt="ALGUMA IMAGEM COMUM" className="w-[50px] h-[50px] mr-4 object-cover" />

                    <h1 className="font-bold text-[30px]">Novos Cursos</h1>

                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                    <Card
                    imageSrc="https://idocode.com.br/wp-content/uploads/2021/07/pexels-luis-gomes-546819-scaled.jpg"
                    paragraph="Curso de Programação"
                    heading="Iniciante"
                    to="/professor/1"
                    />
                    <Card
                    imageSrc="https://cruzeirodosul.vtexassets.com/arquivos/ids/161141-800-auto?v=638621733646970000&width=800&height=auto&aspect=true"
                    paragraph="Curso de Design"
                    heading="Intermediário"
                    to="/professor/25"
                    />
                    <Card
                    imageSrc="https://itec.net.br/projeto2018/wp-content/uploads/2018/02/planejar-palestra-marketing-e-vendas.jpg"
                    paragraph="Curso de Marketing"
                    heading="Avançado"
                    to="/professor/36"
                    />
                </div>
            </div>
            <div className="my-16">
                <div className="flex justify-between items-center px-[170px] mb-8">

                  <h1 className="font-bold text-[30px]">Conteúdo Recente</h1>

                  <img src="https://static.vecteezy.com/system/resources/previews/019/787/026/non_2x/fire-icon-on-transparent-background-free-png.png" alt="ALGUMA IMAGEM" className="w-[50px] h-[50px] object-cover" />

                </div>
                <div className="flex justify-around px-[170px] mt-8">
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

            <div className="max-h-[420px] px-[170px] py-16 flex flex-col items-center">
                <div className="text-center mb-6">
                    <h1>Reviews dos Estudantes</h1>
                </div>
                <div className="flex flex-wrap justify-between gap-5 w-full">
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
