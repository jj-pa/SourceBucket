import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
