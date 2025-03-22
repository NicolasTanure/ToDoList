import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles/TaskForm.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  
  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <div className="side-menu">
        <h1>ToDo List</h1>
      </div>
      <div className="main-content">
        <TaskForm fetchTasks={handleRefresh} /> 
        <TaskList refresh={refresh} />
      </div>
    </div>
  );
};

export default App;