import React, { Component } from "react";
import { Button, Card, Modal, Form, Grid, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { createTargetThenGetTargets as createTarget } from "../actions";
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

  handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
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
            className="theme"
            style={{ padding: "9px" }}
            animated
          >
            <Button.Content visible> Create A Target</Button.Content>
            <Button.Content hidden>
              <Icon name="target" />
            </Button.Content>
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
                      <Button
                        onSubmit={this.handleSubmit}
                        style={{ backgroundColor: "#ffa366" }}
                        animated
                      >
                        <Button.Content visible>
                          Submit Your Target
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name="share" />
                        </Button.Content>
                      </Button>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <h1>Pick the neighborhood</h1>
                      <div id="radio-button-wrapper">
                        <label>
                          <input type="radio" name="neighborhood" value="A" />
                          <img
                            src={A}
                            style={{ height: "180px", width: "20%" }}
                            alt=" "
                          />
                        </label>
                        <label>
                          <input type="radio" name="neighborhood" value="B" />
                          <img
                            src={B}
                            style={{ height: "180px", width: "20%" }}
                            alt=" "
                          />
                        </label>
                        <label>
                          <input type="radio" name="neighborhood" value="C" />
                          <img
                            src={C}
                            style={{ height: "180px", width: "20%" }}
                            alt=" "
                          />
                        </label>
                        <label>
                          <input type="radio" name="neighborhood" value="D" />
                          <img
                            src={D}
                            style={{ height: "180px", width: "20%" }}
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
