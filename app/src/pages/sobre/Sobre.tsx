import Layout from "../../layout/Layout";

import { founders } from "../../data/sobreData";

export default function Sobre() {
  return (
    <Layout>
      <div>
        <section className="bg-zinc-700 text-white py-10 px-4">
          <div className="flex justify-between items-center gap-6">
            <div className="flex-shrink-0">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://images.vexels.com/content/142890/preview/high-tech-rings-logo-4bfb8f.png"
                alt="Logo da Instituição"
              />
            </div>
            <div className="flex-1 text-left">
              <h1 className="text-2xl font-bold mb-2">Instituto Ada Lovelace</h1>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-400 text-black px-2 py-1 text-xs rounded-full">Educação</span>
                <span className="bg-gray-400 text-black px-2 py-1 text-xs rounded-full">Tecnologia</span>
              </div>
              <p>Capacitar os alunos através de soluções educacionais inovadoras</p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-600 transition-all duration-300">Saiba Mais</button>
            </div>
          </div>
        </section>

        <section className="text-center py-10 px-4">
          <h2 className="text-xl font-semibold mb-6">Conheça os Fundadores</h2>
          <div className="flex justify-center gap-20">
            {founders.map((founder, index) => (
              <div key={index} className="text-center">
                <img
                  className="w-24 h-24 rounded-full object-cover mb-4"
                  src={founder.image}
                  alt={founder.name}
                />
                <h3 className="font-semibold text-lg">{founder.name}</h3>
                <p className="italic text-gray-600">{founder.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 py-10 px-4">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto text-center shadow-md">
              <img
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                src={founder.image}
                alt={founder.name}
              />
              <h2 className="text-2xl font-semibold mb-2">{founder.name}</h2>
              <h3 className="text-lg font-medium text-gray-500 mb-4">{founder.role}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{founder.description}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
