import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

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
      <Card>
        <Card.Body>
          <h1>Login</h1>
          <Form onSubmit={this.handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <Button type="submit" disabled={isLoading}>
              Login
            </Button>
          </Form>
          {isLoading && <Spinner name="circle" color="blue" />}
          {err && <p style={{ color: "red" }}>{err}</p>}
        </Card.Body>
      </Card>
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
