import React, { Component } from "react";
import TargetGuessItem from "./TargetGuessItem";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { getTargets, getUsers } from "../actions";

class TargetGuessFeed extends Component {
  render() {
    return (
      <Card style={{ width: "100%", margin: "auto" }}>
        <Card.Content>
          <Card.Header as="h2" textAlign="center">
            All Guesses on This Target
          </Card.Header>
          {this.props.guesses
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map(guess => (
              <TargetGuessItem
                key={guess.id}
                target={guess}
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
)(TargetGuessFeed);
