import React, { Component } from "react";
import { Header, Modal, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteUser } from "../actions/users";

class DeleteUser extends Component {
  state = { open: false };

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };
  handleDelete = () => {
    this.props.deleteUser(this.props.token);
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          trigger={
            <Button
              onClick={this.handleModal}
              style={{ backgroundColor: "#ffa366" }}
            >
              <Icon name="user delete" />
              Delete Profile
            </Button>
          }
          open={this.state.open}
          onClose={this.handleModal}
        >
          <Header icon="archive" content="Remove Account" />
          <Modal.Content>
            <p>Are you sure you want to delete your account?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" onClick={this.handleModal}>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" inverted onClick={this.handleDelete}>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
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
    deleteUser: token => dispatch(deleteUser(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUser);
