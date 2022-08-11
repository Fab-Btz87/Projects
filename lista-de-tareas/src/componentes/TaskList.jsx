import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../styles/TaskList.css';
import Task from './Task';

function TaskList () {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    // console.log("Tarea agregada");
    // console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdate = [task, ...tasks];
      setTask(tasksUpdate);
    }
  };

  const deleteTask = id => {
    const tasksUpdate = tasks.filter(task => task.id !== id);
    setTask(tasksUpdate);
  };

  const taskCompleted = id => {
    const tasksUpdate = tasks.map(task => {
      if (task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(tasksUpdate);
  };

    return (
        <>
          <TaskForm onSubmit={addTask} />
          <div className='task-list-container'>
            {
              tasks.map((task) =>
                <Task 
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  completed={task.completed}
                  taskCompleted={taskCompleted}
                  deleteTask = {deleteTask}
                />
              )
            }
          </div>
        </>
    );
}

export default TaskList;