import React, { Component } from "react";
import { Table, Image, Header, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import StickyHeader from "../StickyHeader";
import { getUsers } from "../../actions/users";
import UserFeed from "../UserFeed";
import UserItem from "../UserItem";

class LeaderboardView extends Component {
  state = { userList: [] };
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Card
          style={{
            margin: "auto",
            marginTop: "30px",
            width: "90%"
          }}
        >
          <Card.Content style={{ width: "100%" }}>
            <Card.Header style={{ textAlign: "center" }}>
              The World's Greatest Hunters
            </Card.Header>
            <br />
            <Table
              basic="very"
              celled
              collapsing
              style={{ width: "70%", margin: "auto" }}
            >
              <Table.Header>
                <Table.Row style={{ textAlign: "center" }}>
                  <Table.HeaderCell style={{ textAlign: "center" }}>
                    Avatar
                  </Table.HeaderCell>
                  <Table.HeaderCell style={{ textAlign: "center" }}>
                    Username
                  </Table.HeaderCell>
                  <Table.HeaderCell style={{ textAlign: "center" }}>
                    Hunts Conquered
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.userList.map(user => (
                  <UserItem
                    key={user.id}
                    displayName={user.displayName}
                    createdAt={user.createdAt}
                    id={user.id}
                    score={user.score}
                  />
                ))}
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.users.userList
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderboardView);
