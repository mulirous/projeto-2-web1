import Layout from "../../layout/Layout";
import ThreeCards from "../../components/threeCards/ThreeCards";

import { useParams } from "react-router-dom";

import { professores } from "../../data/corpoDocenteData";
import { categoriesCards } from "../../data/cursosData";

export default function Professor() {
  const { id } = useParams<{ id: string }>(); // Captura o parâmetro da URL.
  const professorId = parseInt(id || "", 10); // Converte o id para número.

  // Busca o professor com base no ID
  const professor = Object.values(professores)
    .flatMap(group => group.group.flat())
    .find(p => p.id === professorId);

  // Busca os cursos relacionados ao professor
  const cursos = Object.values(categoriesCards)
    .flatMap(group => [...(group.group1 ?? []), ...(group.group2 ?? []), ...(group.group3 ?? [])])
    .flat()
    .filter(c => c.id === professorId) // Filtra cursos do professor
    .slice(0, 3); // Garante no máximo 3 cursos.

  // Caso o professor não seja encontrado
  if (!professor) {
    return (
      <Layout>
        <h1>Professor não encontrado</h1>
      </Layout>
    );
  }

  // Renderiza as informações do professor e os cursos associados
  return (
    <Layout>
      <h1>{professor.h1}</h1>
      <img
        src={professor.img}
        alt={professor.h1}
        className="w-[200px] h-[200px] object-cover rounded-full"
      />
      <p>ID: {professor.id}</p>
      <p>Rota: {professor.route}</p>

      {/* Renderiza os cursos */}
      {cursos.length > 0 ? (
        <ThreeCards cards={cursos} />
      ) : (
        <p>Esse professor ainda não tem cursos disponíveis.</p>
      )}
    </Layout>
  );
}
