import React, { Component } from "react";
import LoginForm from "../LoginForm";
import { Header, Divider } from "semantic-ui-react";

class LandingView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h1" textAlign="center">
          Snap N Seek
        </Header>
        <Header as="h3" textAlign="center">
          Photo Rummage Voyage
        </Header>
        <Divider />
        <LoginForm />
        <div style={{ paddingBottom: "10px" }} />
      </React.Fragment>
    );
  }
}

export default LandingView;
