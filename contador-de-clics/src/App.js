import './App.css';
import FabBtzLogo from './imagenes/fab-btz-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics ] = useState(0);

  const manejarClic = () => {
    setNumClics( numClics + 1 );
  };

  const reiniciarContador = () => {
    setNumClics( 0 );
  };

  return (
    <div className='App'>
      <div className='fabbtz-logo-contenedor'>
        <img className='fabbtz-logo'
        src = { FabBtzLogo }
        alt = 'Logo de Fab-Btz'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics={ numClics }
        />
        <Boton
          texto='Clic'
          esBotonDeClic={ true }
          manejarClic={ manejarClic } />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={ reiniciarContador } />
      </div>
    </div>
  );
}

export default App;
