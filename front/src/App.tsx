import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import logo from './assets/images/logo.svg';

import HomePage from './routes/HomePage';

function App() {
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: '#ccc',
    //   },
    // },
    typography: {
      fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
