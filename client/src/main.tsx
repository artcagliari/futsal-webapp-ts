// Em: client/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Importe o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 
// Importe o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importe o BrowserRouter
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolva o App com o BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);