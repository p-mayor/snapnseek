import React, { Component } from "react";
import Logout from "../Logout";

class ProfileView extends Component {
  render() {
    return (
      <div>
        <p>This is the user profile</p>
        <Logout />
      </div>
    );
  }
}

export default ProfileView;
