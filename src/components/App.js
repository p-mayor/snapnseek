import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginView, RegisterView, HomeView, ProfileView } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginView />} />
        <Route exact path="/home" render={() => <HomeView />} />
        <Route exact path="/profile" render={() => <ProfileView />} />
        <Route exact path="/register" render={() => <RegisterView />} />
      </Switch>
    );
  }
}

export default App;
