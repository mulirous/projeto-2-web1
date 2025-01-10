import { useEffect } from 'react';
import { createIcons, icons } from 'lucide';

import './Navbar.css';

import Searchbar from '../searchbar/Searchbar';

function Navbar() {
  useEffect(() => {
    // Inicializa os ícones do Lucide após o componente ser montado
    createIcons({ icons });
  }, []);

  return (
    <nav className="container">
      <div className="headContainer">
        <i data-lucide="circle-user-round" className="icon"></i>
        {/* NOME DA PÁGINA */}
        <h3 className="pagName">HOME</h3>
      </div>

      <div className="linkContainer">
        <a href="#" className="link">Home</a>
        <a href="#" className="link">Cursos</a>
        <a href="#" className="link">Sobre</a>
        <a href="#" className="link">Fale Conosco</a>
        <a href="#" className="link">Grade</a>
        <div className="searchbarContainer">
          {/* AQUI VAI A SEARCHBAR */}
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
