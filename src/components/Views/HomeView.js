import React, { Component } from "react";
import StickyHeader from "../StickyHeader";
import RecentHuntsList from "../RecentHuntsList";
<<<<<<< HEAD
import PopularHuntsList from "../PopularHuntsList";
import { Image, Button, Card, Grid } from "semantic-ui-react";
=======
import { Grid } from "semantic-ui-react";
>>>>>>> 8306de75d32426d49b3ac2f9a70b8a5c4f69303a

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
<<<<<<< HEAD
        <Grid columns={3} textAlign="center">
=======
        <Grid columns={1}>
>>>>>>> 8306de75d32426d49b3ac2f9a70b8a5c4f69303a
          <Grid.Row>
            <Grid.Column>
              <RecentHuntsList />
            </Grid.Column>
<<<<<<< HEAD
            <Grid.Column>
              <PopularHuntsList />
            </Grid.Column>
=======
>>>>>>> 8306de75d32426d49b3ac2f9a70b8a5c4f69303a
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomeView;
