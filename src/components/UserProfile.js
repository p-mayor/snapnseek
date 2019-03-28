import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getLoggedInUserInfo } from "../actions";
import UserAvatar from "./UserAvatar";
import moment from "moment";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserInfo();
  }
  render() {
    return (
      <Card style={{ margin: "auto" }}>
        <Card.Content>
          <UserAvatar />
          <Card.Meta style={{ marginTop: "10px" }}>
            Kweeting since {moment(this.props.createdAt).format("MMMM DD YYYY")}
          </Card.Meta>
          <Card style={{ backgroundColor: "#ffa366" }}>
            <Card.Content>
              <Card.Header as="h4">Bio:</Card.Header>
              <Card.Description className='break-word'>
                {this.props.about || "This kweeter has not yet created a bio"}
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayName: state.users.loggedInUser.displayName,
    about: state.users.loggedInUser.about,
    username: state.users.loggedInUser.username,
    createdAt: state.users.loggedInUser.createdAt
  };
};

const mapDispatchToProps = dispatch => {
  return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
