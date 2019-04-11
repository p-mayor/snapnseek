import React, { Component } from "react";
import { Image, Card, Grid, Segment, Header, Divider } from "semantic-ui-react";
import StickyHeader from "../StickyHeader";
import A from "../../img/mapquads/A.png";
import B from "../../img/mapquads/B.png";
import C from "../../img/mapquads/C.png";
import D from "../../img/mapquads/D.png";
import EXIF from "exif-js";
import { getTargetById } from "../../actions";
import { connect } from "react-redux";
import GuessForm from "../GuessForm";
import TargetGuessFeed from "../TargetGuessFeed";

export class HuntView extends Component {
  state = { quads: { A, B, C, D } };
  getExif() {
    // let imageEl = document.getElementById("image");
    let newImageEl = document.createElement("img");
    newImageEl.src = this.props.currentTarget.pictureURL;

    let componentThis = this;
    if (newImageEl) {
      return EXIF.getData(newImageEl, function() {
        let latitude = EXIF.getTag(this, "GPSLatitude");
        let longitude = EXIF.getTag(this, "GPSLongitude");
        if (latitude && longitude) {
          let latDeg = latitude[0];
          let latMin = latitude[1];
          let latSec = latitude[2];
          let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;
          let longDeg = longitude[0];
          let longMin = longitude[1];
          let longSec = longitude[2];
          let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;
          longitudeFormat = longitudeFormat * -1;
          componentThis.setState({
            lat: latitudeFormat,
            long: longitudeFormat
          });
        }
      });
    }
  }

  componentDidMount() {
    this.props.getTargetById(this.props.match.params.id);
    let imageEl = document.getElementById("image");
    if (imageEl) {
      imageEl.onload = this.getExif.bind(this);
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.currentTarget.pictureURL !== prevProps.currentTarget.pictureURL
    ) {
      let imageEl = document.getElementById("image");
      imageEl.onload = this.getExif.bind(this);
    }
  }

  matchIdtoUsername = userId => {
    let user = this.props.userList.find(user => user.id === userId);
    if (user) return user.displayName;
    return "Deleted";
  };

  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Card style={{ margin: "auto", width: "70%", maxWidth: "1000px" }}>
          <Card.Content>
            {this.props.currentTarget.pictureURL && (
              <img
                id="image"
                src={this.props.currentTarget.pictureURL}
                alt=""
                style={{ width: "100%", maxHeight: "600px" }}
              />
            )}
          </Card.Content>
          <Card.Content>
            <Card.Header textAlign="center">
              {this.props.currentTarget.title}
            </Card.Header>
            <Card.Meta textAlign="center">
              posted by:{" "}
              {this.matchIdtoUsername(this.props.currentTarget.userId)}
            </Card.Meta>
            <Divider />
            <Card.Content>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    {this.props.currentTarget.text}
                  </Grid.Column>
                  <Grid.Column>
                    <Header textAlign="center">Neighborhood</Header>
                    <Image
                      src={
                        this.state.quads[this.props.currentTarget.neighborhood]
                      }
                      style={{
                        maxHeight: "800px",
                        display: "block",
                        margin: "auto"
                      }}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card.Content>
          <Card.Content extra style={{ margin: "auto" }}>
            <GuessForm targetId={Number(this.props.match.params.id)} />
          </Card.Content>
        </Card>
        <br />
        <Segment style={{ width: "70%", margin: "auto", maxWidth: "1000px" }}>
          <TargetGuessFeed
            lat={this.state.lat}
            long={this.state.long}
            targetId={this.props.match.params.id}
          />
        </Segment>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  targets: state.targets,
  userList: state.users.userList,
  isTargetLoading: state.targets.getTargetsLoading,
  currentTarget: state.targets.currentTarget
});

export default connect(
  mapStateToProps,
  { getTargetById }
)(HuntView);
