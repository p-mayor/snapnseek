import React, { Component } from "react";
import LoginForm from "../LoginForm";
import { Header, Divider } from "semantic-ui-react";

class LandingView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          textAlign="center"
          style={{ height: "100%", marginTop: "5px", marginBottom: "0px" }}
          verticalAlign="middle"
        >
          <h1>Snap'nSeek</h1>
          <p>Geocaching but with Pictures.</p>
        </Header>
        <Divider />
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default LandingView;
