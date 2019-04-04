import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import {
  Form,
  FormField,
  Card,
  Button,
  Image,
  Header
} from "semantic-ui-react";
import logo from "../img/whitebullseye.png";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <Card style={{ margin: "auto" }}>
          <Image
            style={{ marginLeft: "40px", marginBottom: "20px" }}
            src={logo}
            alt=""
          />
          <Header style={{ textAlign: "center", fontSize: "50px" }}>
            Snap'nSeek
          </Header>
          <Card.Content>
            <Form onSubmit={this.handleLogin}>
              <FormField>
                <Form.Input
                  placeholder="Username"
                  name="username"
                  fluid
                  autoFocus
                  label="Username"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  fluid
                  label="Password"
                  onChange={this.handleChange}
                />
                {isLoading && <Spinner name="circle" color="blue" />}
                {err && <p style={{ color: "red" }}>{err}</p>}
              </FormField>
              <div style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  style={{ backgroundColor: "#fe4249" }}
                  className="btn"
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
