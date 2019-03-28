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
              onClick={this.handleModal}
              style={{
                backgroundColor: "#ffa366",
                borderBottom: "1px solid grey"
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
