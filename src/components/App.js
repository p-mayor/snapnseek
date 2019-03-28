import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { HomeView, HuntView, LandingView, ProfileView } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingView />} />
        <Route exact path="/home" render={() => <HomeView />} />
        <Route exact path="/profile" render={() => <ProfileView />} />
        <Route exact path="/hunt" render={() => <HuntView />} />
      </Switch>
    );
  }
}

export default App;
