import BotaoImg from "../botaoImg/BotaoImg";

interface BotaoData {
  img: string;
  h1: string;
  id: number;
  route: string;
}

interface ThreeBotaoImgProps {
  professores: BotaoData[];
}

export default function ThreeBotaoImg({ professores }: ThreeBotaoImgProps) {
  return (
    <div className="flex flex-row gap-32 justify-center mt-10 font-bold text-l">
      {professores.map((prof, index) => (
        <BotaoImg 
        srcImg={prof.img}
        legenda={prof.h1}
        numero={prof.id}
        route={prof.route}
        onClick={() => null}
        />
      ))}
    </div>
  );
}