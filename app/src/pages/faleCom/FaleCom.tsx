import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";

import "./FaleCom.css";

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
      <div className="contactNumbers">
        <div className="contactNumbersText">
          <img
            src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
            alt="ALGUMA IMAGEM"
            className="contactNumbersTextImg"
          />
          <div className="contactNumebrTextInfos">
            <h1>Suporte</h1>
            <p>Algum questionamento ou precisa de assistência? Venha até nós!</p>
          </div>
        </div>
        <div className="contactNumbersButtons">
          <Botao to="/fale-com" className="callButton">Ligar</Botao>
          <Botao to="/fale-com" className="textButton">Enviar Mensagem</Botao>
        </div>
      </div>
      <div className="contactAsks">
        <div className="contacAsksText">
          <h1>Nos Mande uma Mensagem</h1>
          <p>Preencha o formulário abaixo para entrar em contato conosco</p>
        </div>
        <div className="contactAsksForm">
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
            <button type="submit" className="formButton">
              Enviar
            </button>
          </form>
          {mensagemEnviada && (
            <span className="mensagemSucesso">Mensagem enviada com sucesso!</span>
          )}
        </div>
      </div>
    </Layout>
  );
}
