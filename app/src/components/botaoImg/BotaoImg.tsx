import { Link } from "react-router-dom";

interface BotaoImgProps {
  legenda: string;
  numero: number;
  srcImg: string;
  onClick: () => void;
  className?: string;
  route: string;
}

export default function BotaoImg({
  legenda,
  srcImg,
  onClick,
  className,
  route
}: BotaoImgProps) {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <Link className="bg-white border-none hover:opacity-90 flex flex-col items-center" to={route}>
        <img src={srcImg} alt={legenda} className="w-[100px] h-[100px] object-cover rounded-full" />
        <p className="w-[150px] mt-5 text-center">{legenda}</p>
      </Link>
    </div>
  );
}