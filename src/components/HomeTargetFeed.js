import React, { Component } from "react";
import HomeTargetItem from "./HomeTargetItem";
import { getTargets, getUsers } from "../actions";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

class HomeTargetFeed extends Component {
  state = {};
  componentDidMount() {
    this.props.getTargets();
    this.props.getUsers();
    // console.log(this.props.targets.targets);
  }
  matchIdtoUsername = userId => {
    let user = this.props.userList.find(user => user.id === userId);
    if (user) return user.displayName;
    return "Deleted";
  };

  render() {
    return (
      <Card style={{ width: "90%", margin: "auto" }}>
        <Card.Content>
          <Card.Header as="h2" textAlign="center">
            All Targets
          </Card.Header>
          {this.props.targets.targets.map(target => (
            <HomeTargetItem
              key={target.id}
              target={target}
              displayName={this.matchIdtoUsername(target.userId)}
            />
          ))}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  targets: state.targets,
  userList: state.users.userList,
  isTargetLoading: state.targets.getTargetsLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getTargets: () => {
      dispatch(getTargets());
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTargetFeed);
