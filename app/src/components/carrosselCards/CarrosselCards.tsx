import { useState } from "react";
import ThreeCards from "../threeCards/ThreeCards";
import "./CarrosselCards.css";

interface Card {
  img: string;
  h1: string;
  p: string;
  to: string;
}

interface CarrosselCardsProps {
  sections: Card[][];
}

export default function CarrosselCards({ sections }: CarrosselCardsProps) {
  const [currentSection, setCurrentSection] = useState(0);

  const handlePrevious = () => {
    setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carrossel">
      <div className="carrossel-container">
        <button onClick={handlePrevious} className="carrossel-button">
          &lt;
        </button>
        <ThreeCards cards={sections[currentSection]} />
        <button onClick={handleNext} className="carrossel-button">
          &gt;
        </button>
      </div>
      <div className="carrossel-indicators">
        {sections.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSection === index ? "active" : ""}`}
            onClick={() => setCurrentSection(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
