import React, { Component } from "react";
import userIcon from "../img/userIcon.png";
import { Image } from "semantic-ui-react";
import { domain } from "../actions/constants/index";

class SimpleUserImage extends Component {
  state = { src: userIcon };

  componentDidMount() {
    fetch(`${domain}/users/${this.props.userId}/picture`).then(response => {
      if (response.status !== 404 && response.ok) {
        this.setState({
          src: `${domain}/users/${this.props.userId}/picture`
        });
      }
    });
  }

  render() {
    return (
      <Image
        src={this.state.src}
        size={this.props.size}
        style={{ margin: "auto", paddingTop: "10px", backgroundColor: "white" }}
      />
    );
  }
}

export default SimpleUserImage;
