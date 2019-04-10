import React, { Component } from "react";
import StickyHeader from "../StickyHeader";
import PopularHuntsList from "../PopularHuntsList";
import { Grid } from "semantic-ui-react";
import HomeTargetFeed from "../HomeTargetFeed";

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid textAlign="center">
          <Grid.Row columns={2}>
            <Grid.Column>
              <HomeTargetFeed />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomeView;
