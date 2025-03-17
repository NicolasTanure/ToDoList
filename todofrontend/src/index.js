import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Importe os estilos globais
import App from './App'; // Importe o componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);