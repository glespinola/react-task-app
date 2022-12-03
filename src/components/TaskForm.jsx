import React , { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext)

  const HandleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
  };


  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={HandleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input  type="text" placeholder="Escribe tu tarea"
          onChange={e => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 focus:outline-none focus:ring focus:shadow-lg focus:ring-cyan-400 focus:shadow-cyan-500/50 rounded-md"
        />
        <textarea placeholder='Escribe la descripcion de la tarea'
        onChange={e => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2 focus:outline-none focus:ring focus:shadow-lg focus:ring-cyan-400 focus:shadow-cyan-500/50 rounded-md"
        ></textarea>
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 px-3 py-1 text-white font-bold rounded hover:bg-cyan-400">Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm