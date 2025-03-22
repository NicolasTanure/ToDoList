import React, { useState } from 'react';
import { createTask } from '../services/api';
import '../styles/TaskForm.css'; // Importe o CSS

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ titulo: title, descricao: description, completed: false }); 
    setTitle('');
    setDescription('');
    fetchTasks(); // Atualiza a lista após adicionar
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descrição</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;