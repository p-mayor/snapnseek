import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginView from "./LoginView.js"

import {
  Button,
  Form,
  Divider,
  Card,
  CardComponent,
  Image
} from "semantic-ui-react";

class LandingView extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginView />
        <p>This is the landing page</p>
      </React.Fragment>
    );
  }
}

export default LandingView;
