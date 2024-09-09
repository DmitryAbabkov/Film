import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from "./Components/Card";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className='container'>
        <Card title={'Супермен'} img={'https://vcomicse.ru/wp-content/uploads/2019/02/57988-komiksy-anime-supermen-betmen-nebo-2048x2048.jpg'}/>
      </div>
  </React.StrictMode>
);
reportWebVitals();
