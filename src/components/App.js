import Navbar from "./navbar";
import Principal from './principalComponent'
import SobreMi from './aboutMe'
import Habilidades from './skills'
import Proyectos from './proyects';
import Contacto from './Contact';
import '../App.css';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Principal/>
      <SobreMi/>
      <Habilidades/>
      <Proyectos/>
      <Contacto/>
      </>
    </div>
  );
}

export default App;
