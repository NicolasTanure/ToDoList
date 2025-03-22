import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/api';
import '../styles/TaskList.css';

const TaskList = ({ refresh }) => { // Remova fetchTasks das props aqui
  const [tasks, setTasks] = useState([]);

  // Renomeie a função interna para evitar conflito
  const fetchData = async () => {
    const data = await getTasks();
    console.log('Dados recebidos da API:', data);
    setTasks(data);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]); // Continue usando refresh como trigger

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchData(); // Atualiza a lista após excluir
  };

  return (
    <div className="task-list-container">
      <h2>Lista de Tarefas</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.titulo}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;