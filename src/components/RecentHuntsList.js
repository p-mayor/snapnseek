import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Header } from "semantic-ui-react";

class RecentHuntsList extends Component {
  render() {
    return (
      <Card style={{ margin: "auto" }}>
        <Header textAlign="center">
          {" "}
          <br />
          Recently Added Hunts
        </Header>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated="right" size="tiny" src="../img/brettaz.jpg" />
              <Card.Header>DownTown Dumpster Derby</Card.Header>
              <Card.Meta>INoScopedJFK</Card.Meta>
              <Card.Description>
                You'll never be able to <strong>get </strong>in there to get
                this picture <strong>out</strong>.
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{ margin: "auto" }}>
              <Link to="/hunt">
                <Button basic color="green">
                  Check it Out
                </Button>
              </Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image floated="right" size="tiny" src="" />
              <Card.Header>French Toast Mafia</Card.Header>
              <Card.Meta>LactoseTheIntolerant</Card.Meta>
              <Card.Description>
                You've never had breakfast like this before.
                <strong> Musicians</strong> are in the area. Tell em steve sent
                you and you better leave a big tip.
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{ margin: "auto" }}>
              <Link to="/hunt">
                <Button basic color="green">
                  Check it Out
                </Button>
              </Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="tiny"
                src="https://i.imgur.com/tZQDRWb.gif"
              />
              <Card.Header>Downtown Lunar Pursuit</Card.Header>
              <Card.Meta>cward7</Card.Meta>
              <Card.Description>
                Always old, sometimes new. Never sad, sometimes blue. Never
                empty, sometimes full. Never pushes, always pulls. A blonde
                there may have a clue.
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{ margin: "auto" }}>
              <Link to="/hunt">
                <Button basic color="green">
                  Check it Out
                </Button>
              </Link>
            </Card.Content>
          </Card>
        </Card.Group>
      </Card>
    );
  }
}

export default RecentHuntsList;
