import { useEffect } from 'react';
import { createIcons, icons } from 'lucide';
import { Link, useLocation } from 'react-router-dom';

import Searchbar from '../searchbar/Searchbar';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    createIcons({ icons });
  }, []);

  return (
    <nav className="flex justify-between static top-0 w-full p-5">
      <div className="flex items-center space-x-2">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.vexels.com/content/142890/preview/high-tech-rings-logo-4bfb8f.png"
          alt="Logo da Instituição"
        />
        <h3 className="px-2">{getPageName(location.pathname)}</h3>
      </div>

      <div className="flex items-center space-x-5">
        <Link to="/" className="text-black text-xs font-light hover:scale-110 hover:font-bold transition duration-200">Home</Link>
        <Link to="/cursos" className="text-black text-xs font-light hover:scale-110 hover:font-bold transition duration-200">Cursos</Link>
        <Link to="/sobre" className="text-black text-xs font-light hover:scale-110 hover:font-bold transition duration-200">Sobre</Link>
        <Link to="/fale-com" className="text-black text-xs font-light hover:scale-110 hover:font-bold transition duration-200">Fale Conosco</Link>
        <Link to="/grade" className="text-black text-xs font-light hover:scale-110 hover:font-bold transition duration-200">Grade</Link>
        <div className="px-2">
          {/* AQUI VAI A SEARCHBAR */}
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}

// Função para definir o nome da página com base no caminho da URL
function getPageName(pathname: string) {
  const pageNames: { [key: string]: string } = {
    '/': 'Home',
    '/cursos': 'Cursos',
    '/sobre': 'Sobre',
    '/fale-com': 'Fale Conosco',
    '/grade': 'Grade',
  };

  return pageNames[pathname] || 'Página';
}

export default Navbar;