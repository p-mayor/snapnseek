import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Header } from "semantic-ui-react";
import brett from "../img/brettaz.jpg";
import market from "../img/market.JPG";
import rock from "../img/rock.jpg";

class RecentHuntsList extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ margin: "auto" }}>
          <Header textAlign="center">
            {" "}
            <br />
            Recently Added Hunts
          </Header>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" src={brett} />
                <Link to="hunt">
                  <Card.Header>DownTown Dumpster Derby</Card.Header>
                </Link>
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
                <Image floated="right" size="medium" src={market} />
                <Card.Header>French Toast Mafia</Card.Header>
                <Card.Meta>LactoseTheIntolerant</Card.Meta>
                <Card.Description>
                  Those cop cars are always there. They have all the french
                  toast.
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
                <Image floated="right" size="medium" src={rock} />
                <Card.Header>Downtown Easy Climber</Card.Header>
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

export default RecentHuntsList;
