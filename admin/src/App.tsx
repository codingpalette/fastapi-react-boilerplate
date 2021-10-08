import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './assets/images/logo.svg';

import HomePage from './routes/HomePage';
import AuthPage from './routes/AuthPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
    </Switch>
  );
}

export default App;
