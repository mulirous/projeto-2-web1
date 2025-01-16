import { useState } from "react";
import { categoriesCards } from "../../data/cursosData";

import Layout from "../../layout/Layout";
import Searchbar from "../../components/searchbar/Searchbar";
import Botao from "../../components/botao/Botao";
import BotaoImg from "../../components/botaoImg/BotaoImg";
import CarrosselCards from "../../components/carrosselCards/CarrosselCards";

export default function Cursos() {
  const [currentSection, setSection] = useState<number>(1);

  const categories = [
    { id: 1, legenda: "Frontend" },
    { id: 2, legenda: "Data Science" },
    { id: 3, legenda: "DevOps" },
    { id: 4, legenda: "Backend" },
    { id: 5, legenda: "UI/UX Design" },
    { id: 6, legenda: "Soft Skill" },
  ];

  return (
    <Layout>
      <div className="border-t border-[#f8f8f8] bg-white flex flex-col items-center justify-center p-5 h-[711px] gap-10">
        <h1 className="font-bold text-[50px]">Explore Cursos</h1>
        <p>Descubra diversos cursos inimagináveis categorias</p>
        <Searchbar />
        <Botao to="#" className="mt-5 px-[100px] py-[12px] text-white bg-black border border-black rounded-lg font-bold text-center">
          Buscar
        </Botao>
      </div>

      <div className="flex flex-col items-center justify-center border border-[#f8f8f8] bg-white p-5">
        <h2 className="text-xl font-semibold mb-4 font-bold text-[40px]">Categorias</h2>
        <div className="flex gap-12">
          {categories.map((cat) => (
            <BotaoImg
              key={cat.id}
              srcImg="https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png"
              legenda={cat.legenda}
              numero={cat.id}
              onClick={() => setSection(cat.id)}
              className={currentSection === cat.id ? "opacity-100" : "opacity-40 transition-opacity duration-300 ease-in-out"}
            />
          ))}
        </div>
      </div>

      <div className="space-y-8 p-5 bg-white">
        <div className="carrossel">
          <h1 className="text-center font-bold text-[50px]">{categoriesCards[currentSection].title1}</h1>
          <CarrosselCards cardGroups={categoriesCards[currentSection].group1} />
        </div>
        <div className="carrossel">
          <h1 className="text-center font-bold text-[50px]">{categoriesCards[currentSection].title2}</h1>
          <CarrosselCards cardGroups={categoriesCards[currentSection].group2} />
        </div>
        <div className="carrossel">
          <h1 className="text-center font-bold text-[50px]">{categoriesCards[currentSection].title3}</h1>
          <CarrosselCards cardGroups={categoriesCards[currentSection].group3} />
        </div>
      </div>

    </Layout>
  );
}
