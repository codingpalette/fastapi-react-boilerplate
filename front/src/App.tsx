import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './assets/images/logo.svg';

import HomePage from './routes/HomePage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
