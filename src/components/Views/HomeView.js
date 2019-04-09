import React, { Component } from "react";
import StickyHeader from "../StickyHeader";
import RecentHuntsList from "../RecentHuntsList";
import PopularHuntsList from "../PopularHuntsList";
import { Image, Button, Card, Grid } from "semantic-ui-react";

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid columns={3} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <RecentHuntsList />
            </Grid.Column>
            <Grid.Column>
              <PopularHuntsList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomeView;