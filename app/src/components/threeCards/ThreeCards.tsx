import Card from "../card/Card";

interface CardData {
  img: string;
  h1: string;
  p: string;
  to: string;
  id: number | null;
}

interface ThreeCardsProps {
  cards: CardData[];
}

export default function ThreeCards({ cards }: ThreeCardsProps) {
  return (
    <div className="flex gap-[30px] justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.img}
          heading={card.h1}
          paragraph={card.p}
          to={card.to}
        />
      ))}
    </div>
  );
}
