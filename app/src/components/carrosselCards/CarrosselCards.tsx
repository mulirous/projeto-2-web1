import React, { useState } from "react";
import ThreeCards from "../threeCards/ThreeCards";
import "./CarrosselCards.css";

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
    <div className="carrosselCards">
      <div className="carrosselContent">
        <ThreeCards cards={cardGroups[currentIndex]} />
      </div>
      <div className="carrosselButtons">
        <button onClick={handlePrev} className="carrosselButton prev">{"←"}</button>
        <button onClick={handleNext} className="carrosselButton next">{"→"}</button>
      </div>
    </div>
  );
}
