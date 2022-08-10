import './App.css';
import logo from './images/fab-btz-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if (input == '+' || input == '-' || input == '*' || input == '/'){
      alert('Debe ingresar un numero para poder operar');
      setInput('')
    }else{
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }else{
        alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          src={logo}
          className='logo'
          alt='Logo de FAB-BTZ'
        />
      </div>
      <div className='calculadora-container'>
        <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>
          Clear
        </BotonClear>
      </div>
      </div>   
    </div>
  );
}

export default App;
