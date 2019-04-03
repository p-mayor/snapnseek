import React, { Component } from "react";
import { Button, Card, Modal, Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMessage } from "../actions";


class HuntForm extends Component {
  state = { token: this.props.token, text: "", err: null, open: false };

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

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Card style={{ width: "100%", textAlign: "center" }}>
        <Card.Content>
          <Modal
            trigger={
              <Button
                onClick={this.handleModal}
                type="submit"
                style={{ backgroundColor: "#ffa366" }}
              >
                Create Your Own Hunt
              </Button>
            }
            open={this.state.open}
            onClose={this.handleModal}
            >
            <Card style={{ width: "100%" }}>
            <Card.Content>
              <Form onSubmit={this.handleSubmit} size="large">
                <Grid container stackable>
                  <Grid.Column floated="left" width={8}>
                    <Form.Input
                      placeholder="New display name"
                      name="displayName"
                      fluid
                      label="Change your display name"
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      type="password"
                      placeholder="New password"
                      name="password"
                      fluid
                      label="Change Password"
                      onChange={this.handleChange}
                    />
                    <Form.TextArea
                      placeholder="Tell the world something about you."
                      name="about"
                      label="Change your bio"
                      onChange={this.handleChange}
                    />
                  </Grid.Column>
                  <Grid.Column floated="right" width={3}>
                    <Form.Button
                      // type="submit"
                      onSubmit={this.handleSubmit}
                      content="Submit changes"
                      style={{ backgroundColor: "#ffa366" }}
                    />
                  </Grid.Column>
                </Grid>
              </Form>
            </Card.Content>
          </Card>
          </Modal>

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
)(HuntForm);
