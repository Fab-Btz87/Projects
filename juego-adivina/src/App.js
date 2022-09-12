import './App.css';

/*COMPONENTES*/
import Titulo from './Componets/Titulo';
import BtnReinicio from './Componets/BtnReinicio';
import Adivina from './Componets/Adivina';
import Formulario from './Componets/Formulario';
import Textos from './Componets/Textos';
import { useState } from 'react';

const generarNumeroSecreto = () => {
  return Math.trunc(Math.random () * 20) + 1;
}

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroSecreto);
  const [mensaje, setMensaje] = useState('Empiece a adivinar....');
  const [puntuacion, setPuntuacion] = useState(20);
  const [puntajeAlto, setPuntajeAlto] = useState(0);

  const reiniciarPartida = () => {
    // console.log('vamo a reiniciar')
    setNumeroSecreto(generarNumeroSecreto);
    setPuntuacion(20);
    setMensaje('Empiece a Adivinar....');
  }

  const compararNumero = (numero) => {
    // console.log('El nro a comprar es:  ', numero);
    if (!numero){
      setMensaje('🚨 No es un número');
    } else if (Number(numero) !== numeroSecreto) {
        if (puntuacion > 1) {
          setPuntuacion(puntuacion - 1);
          Number(numero) > numeroSecreto 
            ? setMensaje('📈 Tu numero es muy alto') 
            : setMensaje('📉 Tu numero es muy bajo');
        } else {
          setMensaje('🔥 Perdiste el juego');
          setPuntuacion(0);
        }
    } else if (Number(numero) === numeroSecreto) {
       setMensaje('🎉 Ganaste! 🎉');
       if (puntuacion > puntajeAlto) {
        setPuntajeAlto(puntuacion);
       }
    }
  }

  return (
    <div className="App">
      <header>
        <Titulo />
        <p className="between">(Número entre 1 y 20) </p>
        <BtnReinicio reiniciar={reiniciarPartida} />
        <Adivina />
      </header>
      <main>
        <Formulario comparar={compararNumero} />
        <Textos 
          mensaje={mensaje} 
          puntuacion={puntuacion} 
          puntajeAlto={puntajeAlto} />
      </main>
    </div>
  );
}

export default App;
