import React, {useState} from 'react';
import '../styles/TaskForm.css';
import { v4 as uuidv4} from 'uuid'

function TaskForm (props) {

  const [input, setInput] = useState('');
  
  const changeControl = e => {
    setInput(e.target.value);
    // console.log("Escribiendo...");
    // console.log(e.target.value);
  };

  const sendControl = e => {
    e.preventDefault();
    // console.log("Enviando Formilario...");
    const newTask = {
      id: uuidv4(),
      text: input, 
      completed: false
    };

    // console.log(newTask);
    props.onSubmit(newTask);
    
  };

  return (
    <form 
      className='task-form'
      onSubmit={sendControl}>
      <input 
        className='task-input'
        type='text'
        placeholder='Escriba una Tarea'
        name='texto'
        onChange={changeControl}
        autoComplete='off'
      />
      <button className='task-button'>
        Agregar Tarea
      </button>
    </form>  
  );
}

export default TaskForm;