import React, { Component } from "react";
import StickyHeader from "../StickyHeader";
import { Grid } from "semantic-ui-react";
import HomeTargetFeed from "../HomeTargetFeed";
import { getLoggedInUserInfo } from "../../actions";
import { connect } from "react-redux";

export class HomeView extends Component {
  componentDidMount() {
    this.props.getLoggedInUserInfo();
  }
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid textAlign="center">
          <Grid.Row columns={1}>
            <Grid.Column style={{ marginTop: "80px" }}>
              <HomeTargetFeed />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { getLoggedInUserInfo: () => dispatch(getLoggedInUserInfo()) };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeView);
