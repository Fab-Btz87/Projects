import React from 'react';

const BtnReinicio = ({ reiniciar }) => {
  // const ejecutate = () => {
  //     console.log('ejecutando desde el componente BtnReinicio');
  //     reiniciar();
  // }
  return (
    <button 
      onClick={reiniciar} 
      className="btn again" >
        Reiniciar!
    </button>
  );
};

export default BtnReinicio;