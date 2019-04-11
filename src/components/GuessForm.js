import React, { Component } from "react";
import { Button, Card, Modal, Form, Grid, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { createGuess } from "../actions";

class GuessForm extends Component {
  state = {
    token: this.props.token,
    text: null,
    err: null,
    open: false,
    picture: null,
    guessId: null
  };

  // change this to go somewhere
  handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData(e.target); // refers to event target
    this.props.createGuess(formData);
    this.handleModal();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }); // refers to even target
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
            style={{ padding: "9px" }}
            className = "theme"
            animated
          >
            <Button.Content visible> Submit Your Guess</Button.Content>
            <Button.Content hidden>
              <Icon name="picture" />
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
                      <Form.TextArea
                        placeholder="Insert Comments About Your Guess"
                        name="text"
                        label="Guess Description"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        type="file"
                        placeholder="Location"
                        name="picture"
                        fluid
                        label="What's Your Guess"
                      />
                      <Form.Input
                        type="hidden"
                        name="targetId"
                        value={Number(this.props.targetId)}
                      />
                      <Button

                        onSubmit={this.handleSubmit}
                        // content="Submit Your Guess"
                        style={{ backgroundColor: "#ffa366" }}
                        animated
                      >
                        <Button.Content visible>Submit Your Guess</Button.Content>
                        <Button.Content hidden>
                          <Icon name="motorcycle" />
                        </Button.Content>
                      </Button>
                      {/* redirect to the hunt page for the hunt just created */}
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
  { createGuess }
)(GuessForm);
