import { Link } from 'react-router-dom';

interface BotaoProps {
  to: string; // Rota para redirecionar
  children: React.ReactNode; // Conteúdo do botão
  className?: string; // Classe CSS opcional
}

export default function Botao({ to, children, className }: BotaoProps) {
  return (
    <Link to={to} className={`button ${className || ''}`}>
      {children}
    </Link>
  );
}
