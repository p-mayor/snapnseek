import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LandingView, ProfileView } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingView />} />
        <Route exact path="/profile" render={() => <ProfileView />} />
      </Switch>
    );
  }
}

export default App;
