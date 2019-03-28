import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

import MessageForm from "../MessageForm";
import StickyHeader from "../StickyHeader";
import HomeMessageFeed from "../HomeMessageFeed";
import UserAvatar from "../UserAvatar";
import UserFeed from "../UserFeed";

export class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row />
          <Grid.Row columns={2}>
            <Grid.Column floated="left" width={6}>
              <UserAvatar />
              <UserFeed />
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <MessageForm />
              <Segment>
                <HomeMessageFeed />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
export default HomeView;
