import React from 'react';

const Puntaje = ({texto, puntaje}) => {
  // console.log(props);
  return (
    // <p>{props.texto}<span>{props.puntaje}</span></p>
    <p>{texto} <span> {puntaje} </span> </p>
  );
};

export default Puntaje;