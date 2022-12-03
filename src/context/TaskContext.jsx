import React, { createContext, useState, useEffect } from 'react';
import { tasks as data} from '../data/task';

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([])
  const createTask = (task) => {
    if(task.title == '' && task.description == ''){
      alert('Por favor rellene todos los campos.')
    } else {
      setTasks([...tasks , {
      title: task.title,
      id: tasks.length,
      description: task.description
    }]);
    }
  }
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  useEffect(() =>{
    setTasks(data);
  },[])
  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

