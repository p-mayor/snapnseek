import React, { Component } from "react";
import StickyHeader from "../StickyHeader";
import RecentHuntsList from "../RecentHuntsList";

export class AllHuntsView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <RecentHuntsList />
      </React.Fragment>
    );
  }
}

export default AllHuntsView;
