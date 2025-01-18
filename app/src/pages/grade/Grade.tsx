import Layout from "../../layout/Layout";
import Article from "../../components/article/Article";
import Input from "../../components/input/Input";
import GraficoImage from "../../images/grafico.jpg"

import { useState } from "react";
import { Star } from 'lucide-react';

export default function Grade() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    feedback: "",
    rating: 0, // A nova variável para armazenar a avaliação
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRating = (rating : any) => {
    setFormData((prevData) => ({ ...prevData, rating }));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);

    setFormData({
      nome: "",
      email: "",
      feedback: "",
      rating: 0,
    });

    setMensagemEnviada(true);
    setTimeout(() => setMensagemEnviada(false), 2000);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center py-8 h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Áreas de Estudo</h1>
            <p className="text-lg text-gray-600">
              Explore campos de estudo e crie seu cronograma de curso personalizado
            </p>
          </div>
          <img
            className="w-[150px] h-[150px]"
            src="https://cdn-icons-png.flaticon.com/512/4345/4345016.png"
            alt="estudo"
          />
        </div>

        {/* Lista de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl">
          <Article
            heading="Fundamentos da Programação"
            imageSrc="https://www.brasilcode.com.br/wp-content/uploads/2023/08/fundamentos-programacao.webp"
            owner="Guilherme Kaio"
            ownerImage="https://www.itausocial.org.br/wp-content/uploads/2023/06/Carlos-Abicalil-1024x553.png"
            paragraph="Aprendendo o básico de codificação e linguagens de programação"
            typeOne=""
            typeTwo=""
          />
          <Article
            heading="Ciência de Dados"
            imageSrc="https://ead.unimar.br/wp-content/uploads/2022/11/ciencias-de-dados.jpg"
            owner="Pedro Falcão"
            ownerImage="https://avatars.githubusercontent.com/u/22248342?v=4"
            paragraph="Mergulhando no mundo da análise de dados e do aprendizado de máquina"
            typeOne=""
            typeTwo=""
          />
          <Article
            heading="Marketing Digital"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZa19Z1SihDgmpKaWitBJuxbV_aDydUFqhjw&s"
            owner="Juliana Santos"
            ownerImage="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/professora-lu-renascer.jpg?w=1200&h=900&crop=1"
            paragraph="Dominando estratégias e análise de marketing online"
            typeOne=""
            typeTwo=""
          />
          <Article
            heading="Machine Learning"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJb_hBb-ZHBOG_5Ptwi4022rpmxnIz097okA&s"
            owner="Arthur Henrique"
            ownerImage="https://static.imasters.com.br/wp-content/uploads/2019/02/20112325/person05-300x300.jpg"
            paragraph="Aprofundando em Aprendizado de Máquina de maneira singular"
            typeOne=""
            typeTwo=""
          />
        </div>
      </div>

      <div className="py-12">
        <div className="text-center mb-12 bg-zinc-700 py-10 text-white flex justify-evenly">
          <div className="flex text-center gap-12">
            <img src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-user-manual-book-gear-icon-png-image_4746018.png" alt="" className="object-cover h-16 w-16" />
            <div className="flex justify-start flex-col items-start gap-4">
              <h1 className="text-3xl font-bold">Tech Guide</h1>
              <div className="bg-gray-500 text-black font text-xs p-1 font-bold">
                <p>Plataforma de Aprendizagem</p>
              </div>
              <p className="text-white">Veja seu progresso e prepare-se para os próximos desafios.</p>
            </div>
          </div>
          <a className="mt-4 px-2 py-5 bg-black text-white rounded-md h-16 w-64 text-center" href="#progress">Ver Progresso</a>
        </div>

        <div className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center" id="progress">Acompanhamento do progresso</h2>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
              <div className="flex flex-col items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/7820/7820331.png" alt="" className="object-contain h-14 w-14" />
                <h3 className="text-lg font-bold">15</h3>
                <p className="text-sm text-gray-600">Tarefas concluídas</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/2487068-tempo-gasto-em-compras-rgb-color-icon-vetor.jpg" alt="" className="object-cover h-16 w-16 rounded-full" />
                <h3 className="text-lg font-bold">7 semanas</h3>
                <p className="text-sm text-gray-600">Tempo gasto</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={"https://cdn-icons-png.flaticon.com/512/1810/1810720.png"} alt="" className="object-contain h-14 w-14" />
                <h3 className="text-lg font-bold">80%</h3>
                <p className="text-sm text-gray-600">Progresso geral</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md mb-12">
          <h3 className="text-lg font-semibold mb-4">Progresso de estudo</h3>
          <img src={GraficoImage} className="h-[390px] w-full flex items-center justify-center bg-contain bg-center"></img>
        </div>        
      </div>

      <div className="py-8 border-t border-gray-100">
        <h3 className="text-xl font-bold text-center mb-6">Próximos cursos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center">
            <img src="https://dojo.bylearn.com.br/wp-content/uploads/2020/06/dojô-11.png" alt="" className="object-cover h-16 w-16 rounded-full" />
            <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
            <p className="text-gray-500">2 semanas</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Q5JqUbVTpZfYnkIbTE4dOvT1G7dv1gEiPQ&s" alt="" className="object-cover h-16 w-16 rounded-full" />
            <h4 className="font-semibold text-lg">Marketing Digital</h4>
            <p className="text-gray-500">3 semanas</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNEgRAOZkBY2xGlLBr-CaPjJ72X2ZEZmXcw&s" alt="" className="object-cover h-16 w-16 rounded-full" />
            <h4 className="font-semibold text-lg">Machine Learning</h4>
            <p className="text-gray-500">4 semanas</p>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex justify-center flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Formulário de Feedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 justify-items-center w-full">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center gap-6 w-full">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between w-full">
                <Input
                  label="Nome"
                  placeholder="Seu Nome"
                  isObrigatorio={true}
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  placeholder="Seu Email"
                  isObrigatorio={true}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 mt-6 justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="font-bold">Nos deixe sua Avaliação</h3>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRating(rating)}
                        className={`p-2 rounded-full ${
                          formData.rating >= rating ? "text-black" : "text-gray-300"
                        }`}
                      >
                        <Star
                          size={24}
                          fill={formData.rating >= rating ? "yellow" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <Input
                  label="Feedback"
                  placeholder="Conte um pouco sobre o que você pensa..."
                  isObrigatorio={true}
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                />
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-black text-white rounded-md border-b-white"
              >
                Enviar
              </button>
            </form>

            {/* Mensagem de sucesso */}
            {mensagemEnviada && (
              <span className="mensagemSucesso text-green-500">
                Feedback enviado com sucesso!
              </span>
            )}
          </div>

        </div>
      </div>

    </Layout>
  );
}
