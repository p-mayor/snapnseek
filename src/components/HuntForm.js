import React, { Component } from "react";
import { Button, Card, Modal, Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createTarget } from "../actions";
import A from "../img/mapquads/A.png";
import B from "../img/mapquads/B.png";
import C from "../img/mapquads/C.png";
import D from "../img/mapquads/D.png";

class HuntForm extends Component {
  state = {
    token: this.props.token,
    text: null,
    title: null,
    err: null,
    open: false,
    picture: null,
    targetId: null,
    neighborhood: null
  };

  // handleCreateTarget = e => {
  //   if (this.state.text.length < 255) {
  //     this.props.createTarget(this.state);
  //     this.setState({ text: "" });
  //   } else {
  //     this.setState({ err: "Kweet too long" });
  //   }
  // };

  // change this to go somehwere
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    let formData = new FormData(e.target);
    console.log(...formData.values());
    // console.log(e.target.picture.value);
    // console.log(this);
    // this.setState({ picture: e.target.picture.value });
    // console.log(this.state);
    this.props.createTarget(formData);
    this.handleModal();
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
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
            <Form onSubmit={this.handleSubmit}>
              <Grid container stackable columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <Form.Input
                        placeholder="Hunt Name"
                        name="title"
                        fluid
                        label="Give Your Hunt a Name"
                        onChange={this.handleChange}
                      />
                      <Form.TextArea
                        placeholder="Tell the Community about the hunt"
                        name="text"
                        label="Hunt Description"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        type="file"
                        placeholder="Location"
                        name="picture"
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
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <div id="radio-button-wrapper">
                        <label>
                          <input type="radio" name="neighborhood" value="A" />
                          <img
                            src={A}
                            style={{ height: "180px", width: "150px" }}
                            alt=" "
                          />
                        </label>
                        <label>
                          <input type="radio" name="neighborhood" value="B" />
                          <img
                            src={B}
                            style={{ height: "180px", width: "150px" }}
                            alt=" "
                          />
                        </label>
                        <label>
                          <input type="radio" name="neighborhood" value="C" />
                          <img
                            src={C}
                            style={{ height: "180px", width: "150px" }}
                            alt=" "
                          />
                        </label>
                        <label>
                          <input type="radio" name="neighborhood" value="D" />
                          <img
                            src={D}
                            style={{ height: "180px", width: "150px" }}
                            alt=" "
                          />
                        </label>
                      </div>
                    </Form.Field>
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
  { createTarget }
)(HuntForm);
