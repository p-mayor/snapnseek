import React, { Component } from "react";
import ProfileMessageItem from "./ProfileMessageItem";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { getTargets, getUsers } from "../actions";

export class ProfileMessageFeed extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Card.Header as="h2" textAlign="center">
            My Hunts
          </Card.Header>
          {this.props.loggedInUser.targets
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map(message => (
              <ProfileMessageItem
                key={message.id}
                message={message}
                displayName={this.props.loggedInUser.displayName}
              />
            ))}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  targets: state.targets,
  userList: state.users.userList,
  isTargetLoading: state.targets.getTargetLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getTargets: (limit, offset) => {
      dispatch(getTargets(limit, offset));
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMessageFeed);
