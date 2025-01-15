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
    <div className={`relative ${className}`} onClick={onClick}>
      <button className="bg-white border-none hover:opacity-90">
        <img src={srcImg} alt={legenda} className="w-[100px] h-[100px] rounded-full object-cover" />
        <p className="w-[100px] text-center">{legenda}</p>
      </button>
    </div>
  );
}