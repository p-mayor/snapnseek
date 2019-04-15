import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomeView,
  HuntView,
  LandingView,
  ProfileView,
  RegisterView,
  LeaderboardView
} from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Switch>
          <Route exact path="/home" render={() => <StickyHeader />} />
        </Switch> */}
        <Switch>
          <Route exact path="/" render={() => <LandingView />} />
          <Route exact path="/leaderboard" render={() => <LeaderboardView />} />
          <Route exact path="/register" render={() => <RegisterView />} />
          <Route exact path="/home" render={() => <HomeView />} />
          <Route exact path="/profile" render={() => <ProfileView />} />
          <Route exact path="/hunt" component={HuntView} />
          <Route path="/targets/:id" component={HuntView} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
