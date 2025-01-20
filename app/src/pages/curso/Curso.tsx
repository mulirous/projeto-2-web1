import Layout from "../../layout/Layout";
import { cursoData } from "../../data/cursoData";
import { useParams } from "react-router-dom";

export default function Curso() {
  const { id } = useParams<{ id: string }>();
  const cursoId = parseInt(id || "", 10);

  const curso = cursoData[cursoId];

  if (!curso) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-red-500">Curso não encontrado</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="px-10 py-8">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="font-bold text-4xl py-5">Objetivo do Curso</h1>
            <p className="text-lg text-gray-700">{curso.detalhes}</p>
          </div>
          <img
            src={curso.imagem1}
            alt={`Imagem do curso ${cursoId}`}
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </section>

        <section className="mt-16 bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <h2 className="font-bold text-3xl mb-5">Tecnologias Utilizadas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {curso.tecnologias.map((tec, index) => (
              <li
                key={index}
                className="bg-gray-700 p-4 font-bold rounded-md shadow-md text-center hover:bg-gray-600 transition duration-300"
              >
                {tec}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 flex flex-col lg:flex-row items-center gap-8">
          <img
            src={curso.imagem2}
            alt={`Detalhes do curso ${cursoId}`}
            className="rounded-lg shadow-lg w-full max-w-md"
          />
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-3xl mb-4">Detalhes do Curso</h1>
            <p className="text-lg text-gray-700 flex flex-row items-center font-bold py-2">Duração: <p className=" border-gray-800 border ml-1 px-1 py-1 text-gray-800 font-bold rounded-md">{curso.semanas} semanas</p></p>
            <p className="text-lg text-gray-700 flex flex-row items-center font-bold py-2">Total de aulas: <p className="border-gray-800 border  ml-1 px-1 py-1 text-gray-800 font-bold rounded-md">{curso.aulas} aulas</p></p>
            <p className="text-lg text-gray-700 flex flex-row items-center font-bold py-2">Carga horária: <p className="border-gray-800 border  ml-1 px-1 py-1 text-gray-800 font-bold rounded-md">{curso.horas} horas</p></p>
          </div>
        </section>

        <section className="mt-16 bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="font-bold text-3xl mb-5">Formulário de Matrícula</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium text-gray-700">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Método de Pagamento</h3>
              <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-md shadow-md">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <p className="text-lg text-gray-700 font-semibold">
                    Preço:{" "}
                    <span className="text-xl font-bold text-green-600 border border-green-600 px-2 py-1 rounded-md">
                      {curso.preco} R$
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
                    Crédito
                  </button>
                  <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300">
                    Pix
                  </button>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300">
                    PayPal
                  </button>
                  <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                    Boleto
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md hover:opacity-70 transition duration-300"
            >
              Inscrever-se
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}
