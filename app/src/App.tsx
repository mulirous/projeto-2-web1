import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Cursos from './pages/cursos/Cursos';
import Curso from './pages/curso/Curso';
import CorpoDocente from './pages/corpoDocente/CorpoDocente';
import EntreNoTime from './pages/entreNoTime/EntreNoTime';
import FaleCom from './pages/faleCom/FaleCom';
import Grade from './pages/grade/Grade';
import Professor from './pages/professor/Professor';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<Curso />} />
        <Route path="/corpo-docente" element={<CorpoDocente />} />
        <Route path="/entre-no-time" element={<EntreNoTime />} />
        <Route path="/fale-com" element={<FaleCom />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/professor/:id" element={<Professor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
