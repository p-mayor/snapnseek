import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, RegisterForm } from ".";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route exact path="/profile" render={() => <UserProfile />} />
        </Switch>
        <Switch>
          <Route exact path="/" render={() => <RegisterForm />} />
        </Switch>
      </div>
    );
  }
}

export default App;
