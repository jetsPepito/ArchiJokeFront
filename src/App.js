import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage, DashboardPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
