import React, { useState } from "react";
import ThreeCards from "../threeCards/ThreeCards";

interface CardData {
  img: string;
  h1: string;
  p: string;
  to: string;
}

interface CarrosselCardsProps {
  cardGroups: CardData[][]; // Um array de arrays, cada subarray representa um conjunto de cards
}

export default function CarrosselCards({ cardGroups }: CarrosselCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardGroups.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardGroups.length) % cardGroups.length);
  };

  return (
    <div className="flex flex-col items-center justify-center relative py-5">
      <div className="carrosselContent w-full flex justify-center">
        <ThreeCards cards={cardGroups[currentIndex]} />
      </div>
      <div className="carrosselButtons flex gap-5 sticky">
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
