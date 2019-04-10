import React, { Component } from "react";
import { Image, Button, Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import StickyHeader from "../StickyHeader";
import brett from "../../img/brettaz.jpg";
import A from "../../img/mapquads/A.png";
import B from "../../img/mapquads/B.png";
import C from "../../img/mapquads/C.png";
import D from "../../img/mapquads/D.png";
import EXIF from "exif-js";
import { getTargetById } from "../../actions";
import { connect } from "react-redux";

export class HuntView extends Component {
  state = { lat: null, long: null, picture: brett, quads: { A, B, C, D } };
  getExif() {
    let imageEl = document.getElementById("image");
    let componentThis = this;
    return EXIF.getData(imageEl, function() {
      let latitude = EXIF.getTag(this, "GPSLatitude");
      let latDeg = latitude[0];
      let latMin = latitude[1];
      let latSec = latitude[2];
      let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

      let longitude = EXIF.getTag(this, "GPSLongitude");
      let longDeg = longitude[0];
      let longMin = longitude[1];
      let longSec = longitude[2];
      let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;
      longitudeFormat = longitudeFormat * -1;
      componentThis.setState({ lat: latitudeFormat, long: longitudeFormat });
    });
  }

  componentDidMount() {
    let imageEl = document.getElementById("image");
    imageEl.onload = this.getExif.bind(this);
    this.props.getTargetById(this.props.match.params.id);
    console.log(this.props.currentTarget);
    console.log("hi");
    // this.getExif();
  }

  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Card style={{ margin: "auto", width: "70%" }}>
          <Card.Content>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    id="image"
                    src={
                      this.props.currentTarget &&
                      this.props.currentTarget.target.pictureURL
                    }
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    floated="right"
                    src={
                      this.props.currentTarget &&
                      this.state.quads[
                        this.props.currentTarget.target.neighborhood.toUpperCase()
                      ]
                    }
                    style={{ height: "97.5%", width: "100%" }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {this.props.currentTarget && (
              <Card.Header>{this.props.currentTarget.target.title}</Card.Header>
            )}
            {this.props.currentTarget && (
              <Card.Meta>
                posted by: {this.props.currentTarget.target.userId}
              </Card.Meta>
            )}
            {this.props.currentTarget && (
              <Card.Content>
                {this.props.currentTarget.target.text}
              </Card.Content>
            )}
          </Card.Content>
          <Card.Content extra style={{ margin: "auto" }}>
            <Link to="/hunt">
              <Button>Submit Your Guess</Button>
            </Link>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ targets }) => ({
    currentTarget: targets.currentTarget
  }),
  { getTargetById }
)(HuntView);
