import React, { Component } from "react";
import { Grid, Card, Table, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import UserImage from "./UserImage";

export class UserItem extends Component {
  render() {
    return (
      <React.Fragment>
      <Grid>
        <Card style={{ width: "100%" }}>
          <Card.Content style={{ margin: "auto" }}>
            <Card.Header style={{ textAlign: "center" }}>
              {this.props.displayName}
            </Card.Header>
            <Card.Content>{this.props.score}</Card.Content>
            <UserImage userId={this.props.id} />
          </Card.Content>
        </Card>
      </Grid>
      <Table>
        <Card style={{ width: "100%" }}>
          <Card.Content style={{ margin: "auto" }}>
            <Card.Header style={{ textAlign: "center" }}>
              {this.props.displayName}
            </Card.Header>
            <Card.Content>{this.props.score}</Card.Content>
            <UserImage userId={this.props.id} />
          </Card.Content>
        </Card>
        </Table>
        </React.Fragment>
    )
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
