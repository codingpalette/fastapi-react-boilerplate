import React from 'react';
import './assets/css/index.css';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import axios from 'axios';

import App from './App';

import { GlobalStyle } from './assets/css/GlobalStyles';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';
// console.log('env', process.env.NODE_ENV === 'production');

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />

    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
