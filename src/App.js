import React from 'react';
import axios from 'axios';
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
  const token = useSelector((state) => state.login.token)

  if (isConnected)
    axios.defaults.headers.common['Authorization'] = token


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
