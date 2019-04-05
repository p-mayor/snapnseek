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
        <Header textAlign="center" style={{ marginTop: "25px" }}>
          {" "}
          The World's Greatest Hunters
        </Header>
        <Table basic="very" celled collapsing style={{ margin: "auto" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Hunts Conquered</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h3" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    INoScopedJFK
                    <Header.Subheader>Target Acquired</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>1,008</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h3" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    LactoseTheIntolerant
                    <Header.Subheader>Cows Must Die</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>15</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h3" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    cward7
                    <Header.Subheader>
                      Krabby Patty Connoisseur{" "}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>12</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Card
          style={{
            margin: "auto",
            marginTop: "30px"
          }}
        >
          <Card.Content>
            <Card.Header>The World's Greatest Hunters</Card.Header>
            <Table basic="very" celled collapsing style={{ margin: "auto" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Username</Table.HeaderCell>
                  <Table.HeaderCell>Hunts Conquered</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                {this.props.userList.map(user => (
                  <UserItem
                    key={user.id}
                    displayName={user.displayName}
                    createdAt={user.createdAt}
                    id={user.id}
                    score={user.score}
                  />
                ))}
              </Table.Row>
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
