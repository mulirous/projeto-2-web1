import { useState } from "react";
import { categoriesCards } from "../../data/cursosData";

import Layout from "../../layout/Layout";
import Searchbar from "../../components/searchbar/Searchbar";
import Botao from "../../components/botao/Botao";
import BotaoImg from "../../components/botaoImg/BotaoImg";
import CarrosselCards from "../../components/carrosselCards/CarrosselCards";

import "./Cursos.css";

export default function Cursos() {
  const [currentSection, setSection] = useState<number>(1);

  const categories = [
    { id: 1, legenda: "Desenvolvimento Web" },
    { id: 2, legenda: "Data Science" },
    { id: 3, legenda: "DevOps" },
    { id: 4, legenda: "Desenvolvimento Backend" },
    { id: 5, legenda: "UI/UX Design" },
    { id: 6, legenda: "Soft Skill" },
  ];

  return (
    <Layout>
      <div className="search">
        <h1>Explore Cursos</h1>
        <p>Descubra diversos cursos inimagináveis categorias</p>
        <Searchbar />
        <Botao to="#" className="searchBotao">
          Buscar
        </Botao>
      </div>
      <div className="categories">
        <h2 className="categoriesHeader">Categorias</h2>
        <div className="categoriesButtons">
          {categories.map((cat) => (
            <BotaoImg
              key={cat.id}
              srcImg="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
              legenda={cat.legenda}
              numero={cat.id}
              onClick={() => setSection(cat.id)}
              className={currentSection === cat.id ? "active" : "inactive"}
            />
          ))}
        </div>
      </div>
      <div className="carrossels">
        <div className="carrossel One">
          <h1>{categoriesCards[currentSection].title1}</h1>
          <CarrosselCards cardGroups={categoriesCards[currentSection].group1} />
        </div>
        <div className="carrossel Two">
          <h1>{categoriesCards[currentSection].title2}</h1>
          <CarrosselCards cardGroups={categoriesCards[currentSection].group2} />
        </div>
        <div className="carrossel Three">
          <h1>{categoriesCards[currentSection].title3}</h1>
          <CarrosselCards cardGroups={categoriesCards[currentSection].group3} />
        </div>
      </div>
    </Layout>
  );
}
