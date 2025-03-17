import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks(); // Atualiza a lista após excluir
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.title}
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