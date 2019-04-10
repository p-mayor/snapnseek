import React, { Component } from "react";
import ImageUploader from "./ImageUploader";
import { Modal, Button, Icon, Card } from "semantic-ui-react";
import { connect } from "react-redux";

class UpdateProfilePicture extends Component {
  state = { open: false };

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          trigger={
            <Button
              className="theme"
              compact
              onClick={this.handleModal}
              style={{
                borderBottom: "1px solid grey",
                width: "90%"
              }}
            >
              <Icon name="id badge outline" />
              Update Image
            </Button>
          }
          open={this.state.open}
          onClose={this.handleModal}
        >
          <Card style={{ width: "100%" }}>
            <Card.Content>
              <Card.Header>Upload a New Profile Picture</Card.Header>
              <br />
              <ImageUploader onSubmissionComplete={this.handleModal} />
            </Card.Content>
          </Card>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null
)(UpdateProfilePicture);
