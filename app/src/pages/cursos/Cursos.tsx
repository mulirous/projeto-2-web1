import { useState } from "react";

import Layout from "../../layout/Layout";
import Searchbar from "../../components/searchbar/Searchbar";
import Botao from "../../components/botao/Botao";
import BotaoImg from "../../components/botaoImg/BotaoImg";
import CarrosselCards from "../../components/carrosselCards/CarrosselCards";

import "./Curso.css";

export default function Cursos() {
  const [selected, setSelected] = useState<number | null>(null);

  const categories = [
    { id: 1, legenda: "Desenvolvimento Web" },
    { id: 2, legenda: "Data Science" },
    { id: 3, legenda: "DevOps" },
    { id: 4, legenda: "Desenvolvimento Backend" },
    { id: 5, legenda: "UI/UX Design" },
    { id: 6, legenda: "Soft Skill" },
  ];

  const courses: Record<number, { img: string; h1: string; p: string; to: string }[]> = {
    1: [
      { img: "img1.jpg", h1: "Curso 1", p: "Descrição 1", to: "/curso/1" },
      { img: "img2.jpg", h1: "Curso 2", p: "Descrição 2", to: "/curso/2" },
      { img: "img3.jpg", h1: "Curso 3", p: "Descrição 3", to: "/curso/3" },
    ],
    2: [
      { img: "img4.jpg", h1: "Curso 4", p: "Descrição 4", to: "/curso/4" },
      { img: "img5.jpg", h1: "Curso 5", p: "Descrição 5", to: "/curso/5" },
      { img: "img6.jpg", h1: "Curso 6", p: "Descrição 6", to: "/curso/6" },
    ],
  };

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
              onClick={() => setSelected(cat.id)}
              className={selected === cat.id ? "active" : "inactive"}
            />
          ))}
        </div>
      </div>
      {selected && courses[selected] && (
        <CarrosselCards sections={[courses[selected]]} />
      )}
    </Layout>
  );
}
