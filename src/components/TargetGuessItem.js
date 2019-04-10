import React, { Component } from "react";
import { Feed, Card } from "semantic-ui-react";
import { connect } from "react-redux";
// import { toggleAddLike, toggleDeleteLike } from "../actions";
import moment from "moment";

export class TargetGuessItem extends Component {
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event style={{ paddingBottom: "20px" }}>
          <Feed.Content>
            <Feed.Summary>
              <Feed.Date style={{ paddingBottom: "5px" }}>
                {moment(this.props.target.createdAt).fromNow()}
              </Feed.Date>
            </Feed.Summary>
            <Feed.Extra>
              {this.props.target.picture}
            </Feed.Extra>
            <Card style={{ margin: "auto" }}>
              <Card.Content>
                <Feed.Extra className="break-word">
                  {this.props.target.text}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    {this.props.target.likes === undefined
                      ? 0 + " Likes"
                      : this.props.target.likes.length + " Likes"}
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
  // { toggleAddLike, toggleDeleteLike }
)(TargetGuessItem);
