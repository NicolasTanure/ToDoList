import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // URL do backend
});

export const getTasks = async () => {
  const response = await api.get('/tarefas');
  return response.data;
};

export const createTask = async (task) => {
  const response = await api.post('/tarefas', task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await api.put(`/tarefas/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/tarefas/${id}`);
  return response.data;
};