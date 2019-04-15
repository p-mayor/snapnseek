import React, { Component } from "react";
import { Feed, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import moment from "moment";
import EXIF from "exif-js";

export class TargetGuessItem extends Component {
  state = { lat: null };
  getExif() {
    let newImageEl = document.createElement("img");
    newImageEl.src = this.props.target.pictureURL;

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

  degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = this.degreesToRadians(lat2 - lat1);
    var dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

  componentDidMount() {
    let imageEl = document.getElementById(this.props.id);
    if (imageEl) {
      imageEl.onload = this.getExif.bind(this);
    }
  }

  componentDidUpdate() {
    let imageEl = document.getElementById(this.props.id);
    imageEl.onload = this.getExif.bind(this);
    console.log(imageEl);
  }

  matchIdtoUsername = userId => {
    let user = this.props.userList.find(user => user.id === userId);
    if (user) return user.displayName;
    return "Deleted";
  };

  render() {
    return (
      <Feed className="feedstyle">
        <Feed.Event style={{ padding: "20px" }}>
          <Feed.Content style={{ width: "100%" }}>
            <Card style={{ margin: "auto" }}>
              <Card.Content>
                <img
                  src={this.props.target.pictureURL}
                  style={{ width: "100%" }}
                  id={this.props.id}
                  alt=""
                />
                <Feed.Extra className="break-word">
                  {this.props.target.text}
                </Feed.Extra>
                <Feed.Meta className="break-word">
                  guessed by {this.matchIdtoUsername(this.props.target.userId)}{" "}
                  {moment(this.props.target.createdAt).fromNow()}
                </Feed.Meta>
              </Card.Content>
              {this.state.lat && (
                <Card.Content>
                  Missed by{" "}
                  {Math.trunc(
                    this.distanceInKmBetweenEarthCoordinates(
                      this.props.lat,
                      this.props.long,
                      this.state.lat,
                      this.state.long
                    ) * 3280.84
                  )}{" "}
                  feet.
                </Card.Content>
              )}
            </Card>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.users.userList,
  token: state.auth.login.token,
  userId: state.auth.login.id
});

export default connect(
  mapStateToProps,
  null
)(TargetGuessItem);
