import React, { Component } from "react";
import {
  Form,
  FormField,
  Card,
  Button,
  Image,
  Header
} from "semantic-ui-react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { registerThenGoToLogin as register } from "../../actions";
import StickyHeader from "../StickyHeader";
import logo from "../../img/whitebullseye.png";

class RegisterForm extends Component {
  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <Header as="h1" textAlign="center">
          Snap N Seek
        </Header>
        <StickyHeader />
        <Card style={{ margin: "auto" }}>
          <Image
            style={{ marginLeft: "40px", marginBottom: "20px" }}
            src={logo}
            alt=""
          />
          <Card.Content>
            <Form onSubmit={this.handleRegister}>
              <h1 style={{ textAlign: "center" }}>Join Now</h1>
              <FormField>
                <Form.Input
                  placeholder="Username"
                  name="username"
                  required
                  fluid
                  autoFocus
                  label="Username"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="New display name"
                  name="displayName"
                  required
                  fluid
                  label="Display name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  required
                  fluid
                  label="Password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  type="password"
                  required
                  fluid
                  label="Confirm Password"
                  onChange={this.handleChange}
                />
                {isLoading && <Spinner name="circle" color="blue" />}
                {err && <p style={{ color: "red" }}>{err}</p>}
              </FormField>
              <div style={{ textAlign: "center" }}>
                <Button class="theme" type="submit" disabled={isLoading}>
                  Submit
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
    err: auth.registerError
  }),
  { register }
)(RegisterForm);
