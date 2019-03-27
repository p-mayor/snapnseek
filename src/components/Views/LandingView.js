import React, { Component } from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

class LandingView extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginForm />
        <RegisterForm />
      </React.Fragment>
    );
  }
}

export default LandingView;
