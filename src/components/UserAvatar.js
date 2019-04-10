import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import UserImage from "./UserImage";
import { connect } from "react-redux";
import { getLoggedInUserInfo } from "../actions";

class UserAvatar extends Component {
  componentDidMount() {
    this.props.getLoggedInUserInfo();
  }
  render() {
    return (
      <Card className="theme" style={{ margin: "auto" }}>
        <Card.Content style={{ margin: "auto" }}>
          <UserImage userId={this.props.userId} size="huge" />
        </Card.Content>
        <Card.Content>
          <Card.Header style={{ textAlign: "center" }}>
            {this.props.displayName}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login != null) {
    return {
      userId: state.auth.login.id,
      displayName: state.users.loggedInUser.displayName
    };
  } else {
    return {
      userId: null,
      displayName: null
    };
  }
};

const mapDispatchToProps = dispatch => {
  return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAvatar);
