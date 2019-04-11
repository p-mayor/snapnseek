import React, { Component } from "react";
import TargetGuessItem from "./TargetGuessItem";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { getUsers, getGuesses } from "../actions";

class TargetGuessFeed extends Component {
  componentDidMount() {
    this.props.getGuesses();
  }

  render() {
    return (
      <Card style={{ width: "100%", margin: "auto" }}>
        <Card.Content>
          <Card.Header as="h2" textAlign="center">
            All Guesses on This Target
          </Card.Header>
          {this.props.guesses
            .filter(guess => guess.targetId === Number(this.props.targetId))
            .map(guess => (
              <TargetGuessItem
                key={guess.id}
                id={guess.id}
                target={guess}
                displayName={this.props.loggedInUser.displayName}
                lat={this.props.lat}
                long={this.props.long}
              />
            ))}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  guesses: state.guesses.guesses,
  userList: state.users.userList,
  isTargetLoading: state.targets.getTargetLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getGuesses: () => {
      dispatch(getGuesses());
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
