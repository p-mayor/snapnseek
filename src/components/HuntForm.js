import React, { Component } from "react";
import { Button, Card, Modal, Form, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMessage } from "../actions";
import A from "../img/mapQuad1.png";
import B from "../img/mapQuad2.png";
import C from "../img/mapQuad3.png";
import D from "../img/mapQuad4.png";

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
      <Modal
        style={{ width: "100%" }}
        trigger={
          <Button
            onClick={this.handleModal}
            type="submit"
            style={{ backgroundColor: "#fe4249", padding: "9px" }}
          >
            Create A Hunt
          </Button>
        }
        open={this.state.open}
        onClose={this.handleModal}
      >
        <Card style={{ width: "100%" }}>
          <Card.Content style={{ margin: "auto" }}>
            <Form onSubmit={this.handleSubmit} size="medium">
              <Grid container stackable columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Input
                      placeholder="Hunt Name"
                      name="displayName"
                      fluid
                      label="Give Your Hunt a Name"
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      name="location"
                      fluid
                      label="Choose a Region on the Right ->"
                      onChange={this.handleChange}
                    />
                    <Form.TextArea
                      placeholder="Tell the Community about the hunt"
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
                    {/* redirect to the hunt page for the hunt just created */}
                  </Grid.Column>
                  <Grid.Column>

                    <div id="radio-button-wrapper">
                      <label>
                        <input type="radio" name="region" value="A" />
                        <img
                          src={A}
                          style={{ height: "180px", width: "150px" }}
                        />
                      </label>
                      <label>
                        <input type="radio" name="region" value="B" />
                        <img
                          src={B}
                          style={{ height: "180px", width: "150px" }}
                        />
                      </label>
                      <label>
                        <input type="radio" name="region" value="C" />
                        <img
                          src={C}
                          style={{ height: "180px", width: "150px" }}
                        />
                      </label>
                      <label>
                        <input type="radio" name="region" value="D" />
                        <img
                          src={D}
                          style={{ height: "180px", width: "150px" }}
                        />
                      </label>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Card.Content>
        </Card>
      </Modal>
    );
  }
}

export default connect(
  ({ auth }) => ({
    token: auth.login.token
  }),
  { createMessage }
)(HuntForm);
