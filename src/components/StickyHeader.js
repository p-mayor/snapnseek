import React, { Component } from "react";
import { Responsive, Menu, Button, Image, Icon, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutThenGoToLogin as logout } from "../actions";
import logo from "../img/bullseye.png";
import HuntForm from "./HuntForm";

class StickyHeader extends Component {
  handleLogout = () => {
    this.props.logout(this.props.login.token);
  };

  render() {
    return (
      <React.Fragment>
        <Responsive minWidth={768} style={{ marginTop: "10px" }}>
          {this.props.login !== null ? (
            <Menu
              id="menubar"
              style={{
                position: "fixed",
                width: "100%",
                zIndex: "2"
              }}
            >
              <Link to="/home">
                <Menu.Item style={{ height: "100%" }}>
                  <strong>Home</strong>
                  <Image
                    src={logo}
                    alt=""
                    style={{
                      width: "25px",
                      marginLeft: "10px",
                      height: "25px"
                    }}
                  />
                </Menu.Item>
              </Link>
              <Menu.Item>
                <HuntForm />
              </Menu.Item>
              <Menu.Menu position="right">
                <Link to="/profile">
                  <Menu.Item style={{ height: "100%" }}>
                    <Button
                      className="theme"
                      animated
                      compact
                      style={{ padding: "9px", marginLeft: "10px" }}
                      width="400px"
                    >
                      <Button.Content visible>Profile</Button.Content>
                      <Button.Content hidden>
                        <Icon name="user circle" />
                      </Button.Content>
                    </Button>
                  </Menu.Item>
                </Link>
                <Link to="/leaderboard">
                  <Menu.Item style={{ height: "100%" }}>
                    <Button
                      className="theme"
                      animated
                      compact
                      style={{ padding: "9px" }}
                    >
                      <Button.Content visible>Leaderboard</Button.Content>
                      <Button.Content hidden>
                        <Icon name="trophy" />
                      </Button.Content>
                    </Button>
                  </Menu.Item>
                </Link>
                <Menu.Item>
                  <Button
                    className="theme"
                    animated
                    compact
                    style={{ padding: "9px" }}
                    onClick={this.handleLogout}
                  >
                    <Button.Content visible>Logout</Button.Content>
                    <Button.Content hidden>
                      <Icon name="log out" />
                    </Button.Content>
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          ) : (
            <Menu secondary id="menubar">
              <Menu.Item>
                <Link to="/">
                  <Button className="theme">Login</Button>
                </Link>
              </Menu.Item>
            </Menu>
          )}
        </Responsive>
        <Responsive maxWidth={768}>
          <Menu
            icon="labeled"
            style={{
              position: "fixed",
              width: "100%",
              zIndex: "2"
            }}
          >
            <Grid>
              <Grid.Row style={{ width: "100%", justifyContent: "center" }}>
                <Link to="/home">
                  <Menu.Item name="home">
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/profile">
                  <Menu.Item name="profile">
                    <Icon name="user circle" />
                    Profile
                  </Menu.Item>
                </Link>
                <Link to="/leaderboard">
                  <Menu.Item name="leaderboard">
                    <Icon name="trophy" />
                    Leaderboard
                  </Menu.Item>
                </Link>
                <Menu.Item name="logout" onClick={this.handleLogout}>
                  <Icon name="log out" />
                  Logout
                </Menu.Item>
              </Grid.Row>
            </Grid>
            <HuntForm />
          </Menu>
        </Responsive>
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
)(StickyHeader);
