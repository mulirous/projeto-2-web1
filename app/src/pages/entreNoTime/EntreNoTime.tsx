import Layout from "../../layout/Layout";
import Botao from "../../components/botao/Botao";
import Searchbar from "../../components/searchbar/Searchbar";
import Input from "../../components/input/Input";

import { useState } from "react";

export default function EntreNoTime() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    arquivo: null as File | null,
    link: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "arquivo" && files) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);

    setFormData({
      nome: "",
      email: "",
      arquivo: null,
      link: "",
    });

    setMensagemEnviada(true);
    setTimeout(() => setMensagemEnviada(false), 2000);
  };

  return (
    <Layout>
      <div className="border-t border-[#f8f8f8] bg-white flex flex-col items-center justify-center p-5 h-[711px] gap-10">
        <h1 className="font-bold text-[50px]">Explore Oportunidades de Carreiras Interessantes</h1>
        <p>Envie a sua inscrição para trabalhar consoco!</p>
        <Searchbar />
        <Botao to="#" className="mt-5 px-[100px] py-[12px] text-white bg-black border border-black rounded-lg font-bold text-center">
          Buscar
        </Botao>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center" id="progress">Oportunidades agora!</h2>
          <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0 py-20">
            <div className="flex flex-col items-center text-center gap-5">
              <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="" className="object-cover h-32 w-32 rounded-full" />
              <h3 className="text-2xl font-medium">Gerente de Marketing</h3>
              <p className="text-sm text-gray-600">Período Integral</p>
            </div>
            <div className="flex flex-col items-center text-center gap-5">
              <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="" className="object-cover h-32 w-32 rounded-full" />
              <h3 className="text-2xl font-medium">Engenheiro de Software</h3>
              <p className="text-sm text-gray-600">Remoto</p>
            </div>
            <div className="flex flex-col items-center text-center gap-5">
              <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="" className="object-cover h-32 w-32 rounded-full" />
              <h3 className="text-2xl font-medium">Analista de Dados</h3>
              <p className="text-sm text-gray-600">Meio Período</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-[60px_100px]">
        <div>
          <h1 className="font-bold text-[50px]">Venha trabalhar consoco</h1>
          <p>Preencha os dados necessários para se inscrever</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
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
            <Input
              label="Seu Currículo"
              placeholder="Nos envie seu currículo"
              isObrigatorio={true}
              name="arquivo"
              value={formData.arquivo}
              onChange={handleChange}
              type="file" // Mudando o tipo de input para file
            />
            <Input
              label="Seu Github ou Linkedin"
              placeholder="Digite sua mensagem aqui"
              isObrigatorio={true}
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
            <button type="submit" className="mt-5 px-[100px] py-[12px] text-white bg-black border border-black rounded-lg font-bold text-center">
              Enviar
            </button>
          </form>
          {mensagemEnviada && (
            <span className="text-green-500 mt-3 block text-center">Inscrição enviada com sucesso!</span>
          )}
        </div>
      </div>

      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Imagem Aqui</p>
      </div>
    </Layout>
  );
}
