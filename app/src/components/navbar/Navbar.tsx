import { useEffect } from 'react';
import { createIcons, icons } from 'lucide';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';

import Searchbar from '../searchbar/Searchbar';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // Inicializa os ícones do Lucide após o componente ser montado
    createIcons({ icons });
  }, []);

  return (
    <nav className="container">
      <div className="headContainer">
        <i data-lucide="circle-user-round" className="icon"></i>
        {/* Atualiza o nome da página dinamicamente com base na rota */}
        <h3 className="pagName">{getPageName(location.pathname)}</h3>
      </div>

      <div className="linkContainer">
        <Link to="/" className="link">Home</Link>
        <Link to="/cursos" className="link">Cursos</Link>
        <Link to="/sobre" className="link">Sobre</Link>
        <Link to="/fale-com" className="link">Fale Conosco</Link>
        <Link to="/grade" className="link">Grade</Link>
        <div className="searchbarContainer">
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
