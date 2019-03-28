import React, { Component } from "react";
import { Feed, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import UserImage from "./UserImage";

export class UserItem extends Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Card style={{ width: "100%" }}>
                <Card.Content style={{ margin: "auto" }}>
                  <Card.Header style={{ textAlign: "center" }}>
                    {this.props.displayName}
                  </Card.Header>
                  <UserImage userId={this.props.id} />
                </Card.Content>
              </Card>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default connect(
  ({ auth, likes }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError,
    token: auth.login.token,
    likeId: likes.likeId
  }),
  null
)(UserItem);
