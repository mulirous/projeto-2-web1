import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";

export default function FaleCom() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);

    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });

    setMensagemEnviada(true);
    setTimeout(() => setMensagemEnviada(false), 2000);
  };

  return (
    <Layout>
      <div className="flex justify-between p-[60px_100px] border-t border-[#f8f8f8]">
        <div className="flex items-center gap-5">
          <img
            src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
            alt="ALGUMA IMAGEM"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
          <div>
            <h1 className="font-bold text-[50px]">Suporte</h1>
            <p>Algum questionamento ou precisa de assistência? Venha até nós!</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <Botao to="/fale-com" className="px-[100px] py-[12px] text-black border border-black rounded-lg font-bold text-center">Ligar</Botao>
          <Botao to="/fale-com" className="px-[100px] py-[12px] text-white bg-black border border-white rounded-lg font-bold text-center">Enviar Mensagem</Botao>
        </div>
      </div>

      <div className="flex justify-between p-[60px_100px]">
        <div>
          <h1 className="font-bold text-[50px]">Nos Mande uma Mensagem</h1>
          <p>Preencha o formulário abaixo para entrar em contato conosco</p>
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
              label="Assunto"
              placeholder="O Assunto"
              isObrigatorio={false}
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
            />
            <Input
              label="Mensagem"
              placeholder="Digite sua mensagem aqui"
              isObrigatorio={true}
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
            />
            <button type="submit" className="mt-5 px-[100px] py-[12px] text-white bg-black border border-black rounded-lg font-bold text-center">
              Enviar
            </button>
          </form>
          {mensagemEnviada && (
            <span className="text-green-500 mt-3 block text-center">Mensagem enviada com sucesso!</span>
          )}
        </div>
      </div>
    </Layout>
  );
}
