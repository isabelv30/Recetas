import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-dark-purple/theme.css";
//import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
//import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
