import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.' && (valor !== '='));
  }

  return (
    <div
      className={`boton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
  //otra opcion es hacer una validacion sensilla
  // if (esOperador(props.children)){
  //   return (
  //     <div
  //       className='boton-container operador'
  //       onClick={() => props.manejarClic(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // }else {
  //   return (
  //     <div
  //       className='boton-container'
  //       onClick={() => props.manejarClic(props.children)}>
  //       {props.children}
  //     </div>
  //   )
  // }
  //o usar la equiq ueta button en vez de un div
  // return (
  //   <button
  //     className={`boton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
  //     onClick={() => props.manejarClic(props.children)}>
  //     {props.children}
  //   </button>
  // );
}

export default Boton;