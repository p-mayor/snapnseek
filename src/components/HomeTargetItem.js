import React, { Component } from "react";
import { Feed, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import moment from "moment";

export class HomeTargetItem extends Component {
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event style={{ paddingBottom: "20px" }}>
          <Feed.Label>
            <UserImage userId={this.props.target.userId} size="mini" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary style={{ paddingBottom: "5px" }}>
              <Feed.User style={{ color: "black" }}>
                {this.props.displayName}
              </Feed.User>
              <Feed.Date>
                {moment(this.props.target.createdAt).fromNow()}
              </Feed.Date>
            </Feed.Summary>
            <Card style={{ margin: "auto" }}>
              <Feed.Extra className="break-word">
                {this.props.target.title}
              </Feed.Extra>
              <Card.Content>
                <Image src={this.props.target.pictureURL} />
                <Feed.Extra className="break-word">
                  {this.props.target.text}
                </Feed.Extra>
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
  null
)(HomeTargetItem);
