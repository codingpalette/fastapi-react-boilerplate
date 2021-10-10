import React from 'react';
import './assets/css/index.css';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import App from './App';

import { GlobalStyle } from './assets/css/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />

    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
