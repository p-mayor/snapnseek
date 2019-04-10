import React, { Component } from "react";
import { Feed, Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import moment from "moment";

export class HomeTargetItem extends Component {
  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Label>
          <UserImage userId={this.props.target.userId} size="mini" />
        </Feed.Label>
        <Feed.Content style={{ paddingBottom: "60px" }}>
          <Feed.Summary style={{ paddingBottom: "5px" }}>
            <Feed.User style={{ color: "black" }}>
              {this.props.displayName}
            </Feed.User>
            <Feed.Date>
              {moment(this.props.target.createdAt).fromNow()}
            </Feed.Date>
          </Feed.Summary>
          <Card style={{ margin: "auto" }}>
            <Card.Header className="break-word">
              {this.props.target.title}
            </Card.Header>
            <Card.Content>
              <Image src={this.props.target.pictureURL} />
              <Feed.Extra className="break-word">
                {this.props.target.text}
              </Feed.Extra>
            </Card.Content>
            <Card.Content>
              <Feed.Extra className="break-word">
                Neighborhood: {this.props.target.neighborhood}
              </Feed.Extra>
            </Card.Content>
            <Card.Content extra style={{ margin: "auto" }}>
              <Link to="/hunt">
                <Button>Check it Out</Button>
              </Link>
            </Card.Content>
          </Card>
        </Feed.Content>
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
