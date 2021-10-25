import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './assets/images/logo.svg';

import HomePage from './routes/HomePage';
import AuthPage from './routes/AuthPage';
import CartPage from './routes/CartPage';
import SettingPage from './routes/SettingPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/setting" component={SettingPage} />
    </Switch>
  );
}

export default App;
