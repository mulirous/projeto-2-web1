import React, { useState } from "react";
import ThreeBotaoImg from "../threeBotaoImg/ThreeBotaoImg";

interface BotaoData {
    img: string;
    h1: string;
    id: number;
    route: string;
}

interface CarrosselBotaoImgProps {
  botaoGroups: BotaoData[][];
}

export default function CarrosselBotaoImg({ botaoGroups }: CarrosselBotaoImgProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % botaoGroups.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + botaoGroups.length) % botaoGroups.length);
  };

  return (
    <div className="flex flex-col items-center justify-between h-300">
        <div className="flex gap-8">
            <ThreeBotaoImg professores={botaoGroups[currentIndex]} />
        </div>
        <div className="mt-6 gap-5 flex"> {/* Adicionada margem superior para mais espaço */}
            <button onClick={handlePrev} className="carrosselButton prev bg-black text-white py-1 px-3 rounded-md text-lg">
                {"←"}
            </button>
            <button onClick={handleNext} className="carrosselButton next bg-black text-white py-1 px-3 rounded-md text-lg">
                {"→"}
            </button>
        </div>
  </div>
  );
}
