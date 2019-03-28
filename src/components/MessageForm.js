import React, { Component } from "react";
import { Button, Form, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMessage } from "../actions";

class MessageForm extends Component {
  state = { token: this.props.token, text: "", err: null };

  handleCreateMessage = e => {
    e.preventDefault();
    if (this.state.text.length < 255) {
      this.props.createMessage(this.state);
      e.target[0].value = "";
      this.setState({ text: "" });
    } else {
      this.setState({ err: "Kweet too long" });
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <Card style={{ width: "100%", textAlign: "center" }}>
        <Card.Content>
          <Form onSubmit={this.handleCreateMessage}>
            <Form.Field>
              <Form.Input
                fluid
                placeholder="Enter kweet..."
                onChange={this.handleChange}
              />
              {this.state.err && (
                <p style={{ color: "red" }}>{this.state.err}</p>
              )}
            </Form.Field>
            <Button type="submit" style={{ backgroundColor: "#ffa366" }}>
              Kweet
            </Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  ({ auth }) => ({
    token: auth.login.token
  }),
  { createMessage }
)(MessageForm);
