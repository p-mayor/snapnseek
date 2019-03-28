import React, { Component } from "react";
import { Feed, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleAddLike, toggleDeleteLike } from "../actions";
import moment from "moment";

export class ProfileMessageItem extends Component {
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event style={{ paddingBottom: "20px" }}>
          <Feed.Content>
            <Feed.Summary>
              <Feed.Date style={{ paddingBottom: "5px" }}>
                {moment(this.props.message.createdAt).fromNow()}
              </Feed.Date>
            </Feed.Summary>
            <Card style={{ margin: "auto" }}>
              <Card.Content>
                <Feed.Extra className="break-word">
                  {this.props.message.text}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    {this.props.message.likes === undefined
                      ? 0 + " Likes"
                      : this.props.message.likes.length + " Likes"}
                  </Feed.Like>
                </Feed.Meta>
              </Card.Content>
            </Card>
          </Feed.Content>
        </Feed.Event>
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
  }),
  { toggleAddLike, toggleDeleteLike }
)(ProfileMessageItem);
