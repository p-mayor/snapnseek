import React, { Component } from "react";
import { Feed, Icon, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleAddLike, toggleDeleteLike } from "../actions";
import UserImage from "./UserImage";
import moment from "moment";

export class MessageItem extends Component {
  handleAddLike = e => {
    this.props.toggleAddLike(this.props.message.id);
  };

  handleDeleteLike = () => {
    let curUserId = this.props.userId;
    let curLike = this.props.message.likes.filter(like => {
      if (curUserId === like.userId) {
        return like;
      }
      return null;
    });
    if (curLike.length !== 0) {
      this.props.toggleDeleteLike(curLike[0].id, this.props.message.id);
    }
  };

  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event style={{ paddingBottom: "20px" }}>
          <Feed.Label>
            <UserImage userId={this.props.message.userId} size="mini" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary style={{ paddingBottom: "5px" }}>
              <Feed.User style={{ color: "black" }}>
                {this.props.displayName}
              </Feed.User>
              <Feed.Date>
                {moment(this.props.message.createdAt).fromNow()}
              </Feed.Date>
            </Feed.Summary>
            <Card style={{ margin: "auto" }}>
              <Card.Content>
                <Feed.Extra className="break-word">
                  {this.props.message.text}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like onClick={this.handleAddLike}>
                    <Icon name="like" />
                    {this.props.message.likes === undefined
                      ? 0 + " Likes"
                      : this.props.message.likes.length + " Likes"}
                  </Feed.Like>
                  <Feed.Like>
                    <Icon name="thumbs down" onClick={this.handleDeleteLike} />
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
)(MessageItem);
