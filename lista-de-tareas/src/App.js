import './App.css';
import Logo from './componentes/Logo';
import TaskList from './componentes/TaskList';

function App() {
  return (
    <div className='lista-de-tareas'>
      <Logo />
      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
        <TaskList />
        
      </div>
    </div>
  );
}

export default App;
