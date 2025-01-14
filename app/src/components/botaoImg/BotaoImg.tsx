import "./BotaoImg.css";

interface BotaoImgProps {
  legenda: string;
  numero: number;
  srcImg: string;
  onClick: () => void;
  className?: string;
}

export default function BotaoImg({
  legenda,
  srcImg,
  onClick,
  className,
}: BotaoImgProps) {
  return (
    <div className={`container ${className}`} onClick={onClick}>
      <button className="containerButton">
        <img src={srcImg} alt={legenda} className="containerImg" />
        <p className="legend">{legenda}</p>
      </button>
    </div>
  );
}
