import React, { Component } from "react";
import LoginForm from "../LoginForm";
import { Header, Divider } from "semantic-ui-react";

class LandingView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          as="h1"
          textAlign="center"
          style={{ height: "100%", marginTop: "5px", marginBottom: "0px" }}
        >
          Snap'nSeek
        </Header>
        <Header as="h2" textAlign="center">
          Geocaching but with Pictures.
        </Header>
        <Divider />
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default LandingView;
