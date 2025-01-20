import Layout from "../../layout/Layout";
import ThreeCards from "../../components/threeCards/ThreeCards";

import { useParams, Link } from "react-router-dom";

import { professores } from "../../data/corpoDocenteData";
import { categoriesCards } from "../../data/cursosData";

export default function Professor() {
  const { id } = useParams<{ id: string }>();
  const professorId = parseInt(id || "", 10);

  const professor = Object.values(professores)
    .flatMap(group => group.group.flat())
    .find(p => p.id === professorId);

  const cursos = Object.values(categoriesCards)
    .flatMap(group => [...(group.group1 ?? []), ...(group.group2 ?? []), ...(group.group3 ?? [])])
    .flat()
    .filter(c => c.id === professorId)
    .slice(0, 3);

  const titles = [];

  for (let id = 1; id <= 36; id++) {
    let foundTitle: string | undefined;
  
    // Itera sobre os grupos (categoriesCards)
    for (const [groupKey, group] of Object.entries(categoriesCards)) {
      const groupNumber = parseInt(groupKey, 10); // Converte a chave do grupo para número
  
      // Determina qual título usar com base no intervalo
      if (id >= (groupNumber - 1) * 6 + 1 && id <= groupNumber * 6) {
        if (id % 6 === 1 || id % 6 === 2) {
          foundTitle = group.title1;
        } else if (id % 6 === 3 || id % 6 === 4) {
          foundTitle = group.title2;
        } else if (id % 6 === 5 || id % 6 === 0) {
          foundTitle = group.title3;
        }
        break;
      }
    }
  
    // Adiciona o resultado ao array final
    if (foundTitle) {
      titles.push({ id, title: foundTitle });
    } else {
      titles.push({ id, title: "Título não encontrado" });
    }
  }
  
  console.log(titles);    

  if (!professor) {
    return (
      <Layout>
        <h1>Professor não encontrado</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-row justify-evenly items-center w-full py-8">
        {/* Seção da esquerda: Imagem e nome */}
        <div className="flex flex-col items-center">
          <img
            src={professor.img}
            alt={professor.h1}
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h1 className="mt-4 text-lg font-semibold">{professor.h1}</h1>
        </div>

        {/* Seção do meio: Título */}
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">
            {titles[professor.id - 1].title ?? "Titulo do Professor"}
          </h1>
        </div>

        {/* Seção da direita: Botões */}
        <div className="flex flex-col items-end">
          <Link
            to="/fale-com"
            className="mb-4 px-4 py-2 bg-white text-black rounded hover:bg-zinc-100 border-black border"
          >
            Enviar Mensagem
          </Link>
          <Link
            to="/cursos"
            className="px-4 py-2 bg-black text-white rounded hover:opacity-70"
          >
            Ver Aulas
          </Link>
        </div>
      </div>

      {/* Seção inferior: Cursos ministrados */}
      <div className="flex flex-col justify-center w-screen py-8 align-center text-center border-t border-gray-100">
        <h1 className="font-bold text-4xl py-8">Cursos Ministrados</h1>
        {cursos.length > 0 ? (
          <ThreeCards cards={cursos} />
        ) : (
          <p>Esse professor ainda não tem cursos disponíveis.</p>
        )}
      </div>
    </Layout>

  );
}
