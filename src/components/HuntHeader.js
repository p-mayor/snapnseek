import React, { Component } from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserImage from "./UserImage";
import { logoutThenGoToLogin as logout } from "../actions";
import logo from "../img/bullseye.png";

class HuntHeader extends Component {
  handleLogout = () => {
    this.props.logout(this.props.login.token);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.login !== null ? (
          <Menu id="menubar">
            <React.Fragment>
              <Link to="/home">
                <Menu.Item>
                  Snap'nSeek
                  <Image src={logo} alt="" style={{ width: "50px" }} />
                </Menu.Item>
              </Link>
              <Menu.Menu position="right">
                <Link to="/profile">
                  <Menu.Item style={{ height: "100%" }}>
                    <span style={{ marginRight: "10px" }}>
                      {this.props.displayName}
                    </span>
                    <UserImage userId={this.props.login.id} size="mini" />
                  </Menu.Item>
                </Link>
                <Menu.Item>
                  <Button
                    style={{ backgroundColor: "#fe4249" }}
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </React.Fragment>
          </Menu>
        ) : (
          <Menu secondary id="menubar">
            <React.Fragment>
              <Menu.Item>
                <Link to="/hunt">
                  <Button style={{ backgroundColor: "#fe4249" }}>
                    All Hunts
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/leaderboard">
                  <Button style={{ backgroundColor: "#fe4249" }}>
                    LeaderBoards
                  </Button>
                </Link>
              </Menu.Item>
            </React.Fragment>
          </Menu>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth, users }) => ({
    login: auth.login,
    displayName: users.loggedInUser.displayName
  }),
  { logout }
)(HuntHeader);
