import React, { Component } from "react";
import StickyHeader from "../StickyHeader";
import UserProfile from "../UserProfile";
import UpdateProfileForm from "../UpdateProfileForm";
import ProfileGuessFeed from "../ProfileGuessFeed";
import UpdateProfilePicture from "../UpdateProfilePicture";
import DeleteUser from "../DeleteUser";

import { Grid, Segment, Card } from "semantic-ui-react";

export default class ProfileView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row columns={2} style={{ marginTop: "120px" }}>
            <Grid.Column floated="left" width={6}>
              <UserProfile />
              <Card
                style={{
                  margin: "auto",
                  marginTop: "50px",
                  textAlign: "center"
                }}
              >
                <Card.Content style={{ margin: "auto" }}>
                  <UpdateProfilePicture />
                  <UpdateProfileForm />
                  <DeleteUser />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <Segment>
                <ProfileGuessFeed />
              </Segment>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
