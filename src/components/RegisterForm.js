import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
  state = {};

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Card style={{ width: "18rem", margin: "auto", marginTop: "10px" }}>
        <Card.Body>
          <h1>Register</h1>
          <Form onSubmit={this.handleRegister}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="username"
                name="username"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDisplayname">
              <Form.Label>Display Name:</Form.Label>
              <Form.Control
                type="displayName"
                name="displayName"
                placeholder="Enter display name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register Now!
            </Button>
          </Form>
          <Link to="/">Login</Link>
        </Card.Body>
      </Card>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register }
)(RegisterForm);
