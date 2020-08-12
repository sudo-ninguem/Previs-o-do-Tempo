import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Perceba que estamos importando a class App justamente para que o (ReactDOM) consiga mostra-lo na tela

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
