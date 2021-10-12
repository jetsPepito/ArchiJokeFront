import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { NavBar } from './components';
import { LoginPage, MyJokesPage, TopJokesPage } from './pages';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/topJokes">
          <TopJokesPage />
        </Route>
        <Route exact path="/myJokes">
          <MyJokesPage />
        </Route>
        <Route path="">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
