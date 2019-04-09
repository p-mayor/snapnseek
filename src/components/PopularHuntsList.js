import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Header } from "semantic-ui-react";
import cactus from "../img/cactus.jpg";
import hunts from "../img/hunts.png";
import guy from "../img/5guy.jpg";

class PopularHuntsList extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ margin: "auto" }}>
          <Header textAlign="center">
            {" "}
            <br />
            Most Popular Hunts
          </Header>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" src={cactus} />
                <Link to="hunt">
                  <Card.Header>Desert Detour</Card.Header>
                </Link>
                <Card.Meta>INoScopedJFK</Card.Meta>
                <Card.Description>
                  Its Dusty. It's lonely. It's spiky. Off the coast of the big
                  way.
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
                <Image floated="right" size="medium" src={hunts} />
                <Card.Header>French Toast Mafia</Card.Header>
                <Card.Meta>LactoseTheIntolerant</Card.Meta>
                <Card.Description>
                  Definitely not in your fride. This is the supersized. It's
                  actually a poster
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
                <Image floated="right" size="medium" src={guy} />
                <Card.Header>Downtown Heights</Card.Header>
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
        <br />
        <Button basic color="green">
          Load More Hunts
        </Button>
      </React.Fragment>
    );
  }
}

export default PopularHuntsList;
