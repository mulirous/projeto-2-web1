import Layout from "../../layout/Layout";
import Botao from "../../components/botao/Botao";

import "./FaleCom.css"

export default function FaleCom() {
    return (
      <Layout>
        <div className="contactNumbers">
          <div className="contactNumbersText">
            <img src="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png" alt="ALGUMA IMAGEM" className="contactNumbersTextImg" />
            <div className="contactNumebrTextInfos">
              <h1>Suporte</h1>
              <p>Algum questionamento ou precisa de assistencia? Venha até nós!</p>
            </div>
          </div>
          <div className="contactNumbersButtons">
          <Botao to="/fale-com" className="callButton">Ligar</Botao>
          <Botao to="/fale-com" className="textButton">Enviar Mensagem</Botao>
          </div>
        </div>
        <div className="contactAsks">
          <div className="contacAsksText">

          </div>
          <div className="contactAsksForm">

          </div>
        </div>
      </Layout>
    );
  }
  