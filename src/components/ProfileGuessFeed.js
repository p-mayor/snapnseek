import React, { Component } from "react";
import ProfileGuessItem from "./ProfileGuessItem";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { getTargets, getUsers } from "../actions";

class ProfileGuessFeed extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Card.Header as="h2" textAlign="center">
            All Your Guesses
          </Card.Header>
          {this.props.guesses
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map(target => (
              <ProfileGuessItem
                key={target.id}
                target={target}
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
  guesses: state.users.loggedInUser.guesses,
  userList: state.users.userList,
  isTargetLoading: state.targets.getTargetLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getGuesses: (limit, offset) => {
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
)(ProfileGuessFeed);
