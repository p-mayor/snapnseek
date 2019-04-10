import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImage } from "../actions";

class ImageUploader extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.image(formData);
    this.props.onSubmissionComplete();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" name="picture" id="picture" />
        <button type="submit" value="submit">
          Submit New Image File
        </button>
        {this.props.uploadImageResult}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploadImageResult: state.uploadImageResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    image: imageData => dispatch(uploadImage(imageData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploader);
