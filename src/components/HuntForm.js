import React, { Component } from "react";
import { Button, Card, Modal, Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMessage } from "../actions";
// import ImageUploader from "./ImageUploader";

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

  // change this to go somehwere
  handleSubmit = () => {
    // this.props.updateUser({ ...this.state });
    this.handleModal();
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
          <Modal style={{width: "100%" }}
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
            <Card style={{width: "100%" }}>
              <Card.Content style={{ margin: "auto"}}>
                <Form onSubmit={this.handleSubmit} size="large">
                  <Grid container stackable>
                    <Grid.Column>
                      <Form.Input
                        placeholder="Hunt Name"
                        name="displayName"
                        fluid
                        label="Give Your Hunt a Name"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        placeholder="Location"
                        name="location"
                        fluid
                        label="Where is it?"
                        onChange={this.handleChange}
                      />
                      <Form.TextArea
                        placeholder="Tell the communinity about the hunt"
                        name="about"
                        label="Hunt Description"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        type="file"
                        placeholder="Location"
                        name="location"
                        fluid
                        label="Submit Your Enticing Hunt Photo"
                        onChange={this.handleChange}
                      />
                      <Form.Button
                        // type="submit"
                        onSubmit={this.handleSubmit}
                        content="Submit Your Hunt"
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
