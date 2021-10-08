import React from 'react';
import './assets/css/index.less';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import GlobalStyle from './assets/css/GlobalStyles';

axios.defaults.withCredentials = true;

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:8000' : 'http://localhost:8000';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
