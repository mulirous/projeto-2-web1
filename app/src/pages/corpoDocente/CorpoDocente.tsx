import Layout from "../../layout/Layout";
import CarrosselBotaoImg from "../../components/carrosselBotaoImg/CarrosselBotaoImg";

import { professores } from "../../data/corpoDocenteData";

export default function CorpoDocente() {
  return (
    <Layout>
      <div className="border-t border-[#f8f8f8] bg-white flex flex-col items-center justify-center p-5 h-[711px] gap-10">
        <h1 className="font-bold text-[50px]">Conheça Seus Professores</h1>
        <p>Conheça agora seus mestres que vão te guiar na sua jornada!</p>
      </div>

      <div className="space-y-8 p-5 bg-white border-t border-gray-100">
        <div className="justify-between">
          {Object.entries(professores).map(([key, prof]) => (
            <div key={key} className="py-10">
              <h1 className="text-center font-bold text-[50px] mb-10">{prof.title}</h1>
              <CarrosselBotaoImg botaoGroups={prof.group} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
