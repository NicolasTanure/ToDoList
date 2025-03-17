import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const fetchTasks = () => {
    setRefresh(!refresh); 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ToDo List</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList />
    </div>
  );
};

export default App;