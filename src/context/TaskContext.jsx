import React, { createContext, useState, useEffect } from 'react';
import { tasks as data} from '../data/task';
import Swal from 'sweetalert2';

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {


  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [tasks, setTasks] = useState([])
  const createTask = (task) => {
    if(task.title && task.description){
      setTasks([...tasks , {
      title: task.title,
      id: tasks.length,
      description: task.description
      }]);
    }else {
      Toast.fire({
        icon: 'error',
        title: 'Por favor, rellene todos los campos'
      })
    }
  }
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  Toast.fire({
    icon: 'success',
    title: 'Tarea eliminada exitosamente!'
  })
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

