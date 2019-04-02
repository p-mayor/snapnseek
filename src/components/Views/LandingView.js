import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./LoginForm.js";
import RecentHunts from "./RecentHunts.js";
import HuntHeader from "../HuntHeader";
import StickyHeader from "../StickyHeader";
import { Grid, Header, Divider, Image } from "semantic-ui-react";

class LandingView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          textAlign="center"
          style={{ height: "100%", marginTop: "5px", marginBottom:"0px" }}
          verticalAlign="middle"
        >
          <h1>Welcome to Snap'nSeek</h1>
          <p>
            Geocaching but with Pictures so you don't get your delicate little
            hands dirty.
          </p>
        </Header>
        <Divider />
       <Grid >
          <Grid.Row columns={2} >
            <Grid.Column width={8}>
              <HuntHeader />
            </Grid.Column>
            <Grid.Column width={8}>
              <StickyHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <RecentHunts />
            </Grid.Column>
            <Grid.Column width={8}>
              <LoginForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default LandingView;
