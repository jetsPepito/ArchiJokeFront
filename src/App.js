import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { NavBar } from './components';
import {
  LoginPage,
  RegisterPage,
  TopJokesPage,
  MyJokesPage,
  AddJokePage,
} from './pages';

const App = () => {
  const isConnected = useSelector((state) => state.login.isConnected);

  return !isConnected ? (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route path="">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/topJokes">
          <TopJokesPage />
        </Route>
        <Route exact path="/myJokes">
          <MyJokesPage />
        </Route>
        <Route exact path="/addJoke">
          <AddJokePage />
        </Route>
        <Route path="">
          <Redirect to="/topJokes" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
