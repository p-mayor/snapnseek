import React, { Component } from "react";
import { Form, Grid, Modal, Button, Icon, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser } from "../actions/users";

class UpdateProfileForm extends Component {
  state = { open: false };
  handleChange = (event, { value }) =>
    this.setState({ [event.target.name]: value });

  handleSubmit = () => {
    this.props.updateUser({ ...this.state });
    this.handleModal();
  };
  handleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          trigger={
            <Button
              onClick={this.handleModal}
              compact
              className="theme"
              style={{
                borderBottom: "1px solid grey",
                width: "90%"
              }}
            >
              <Icon name="id card outline" />
              Update Profile
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
                    <Form.Input
                      type="score"
                      placeholder="New score"
                      name="score"
                      fluid
                      label="Give yourself a score"
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
                    <Button
                      onSubmit={this.handleSubmit}
                      className="theme"
                      animated
                    >
                      <Button.Content visible>Save Changes</Button.Content>
                      <Button.Content hidden>
                        <Icon size="large" name="save" />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid>
              </Form>
            </Card.Content>
          </Card>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.login.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => dispatch(updateUser(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileForm);
