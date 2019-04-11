import React, { Component } from "react";
import { Feed, Card, Image, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { toggleAddLike, toggleDeleteLike } from "../actions";
import moment from "moment";

export class ProfileGuessItem extends Component {
  render() {
    return (
      <Feed className="feedstyle">
        <Link to={`/targets/${this.props.target.targetId}`}>
          <Feed.Event style={{ paddingBottom: "20px" }}>
            <Feed.Content>
              <Feed.Summary>
                <Feed.Date style={{ paddingBottom: "5px" }}>
                  {moment(this.props.target.createdAt).fromNow()}
                </Feed.Date>
              </Feed.Summary>
              <Grid columns={2} style={{ margin: "auto", width: "90%" }}>
                <Grid.Row>
                  <Grid.Column>
                    <Image size="tiny" src={this.props.target.pictureURL} />
                  </Grid.Column>
                  <Grid.Column>
                    <Card.Content>
                      <Feed.Extra className="break-word">
                        {this.props.target.text}
                      </Feed.Extra>
                    </Card.Content>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Feed.Content>
          </Feed.Event>
        </Link>
      </Feed>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError,
    token: auth.login.token,
    userId: auth.login.id
  })
  // { toggleAddLike, toggleDeleteLike }
)(ProfileGuessItem);
