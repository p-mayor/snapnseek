import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LandingView, ProfileView, RegisterForm } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingView />} />
        <Route exact path="/profile" render={() => <ProfileView />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
      </Switch>
    );
  }
}

export default App;
