import React, { Component } from "react";
import { Table, Card, Grid, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import StickyHeader from "../StickyHeader";
import { getUsers } from "../../actions/users";
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
        <Grid textAlign="center">
          <Grid.Row columns={1}>
            <Grid.Column style={{ marginTop: "80px" }}>
              <Card
                style={{
                  margin: "auto",
                  width: "90%"
                }}
              >
                <Card.Content style={{ width: "100%" }}>
                  <Card.Header style={{ textAlign: "center" }}>
                    The World's Greatest Hunters
                  </Card.Header>
                  <Divider />
                  <Table
                    basic="very"
                    celled
                    style={{ width: "70%", margin: "auto" }}
                  >
                    <Table.Header>
                      <Table.Row style={{ textAlign: "center" }}>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.props.userList
                        .sort(function(a, b) {
                          return b.score - a.score;
                        })
                        .map(user => (
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
