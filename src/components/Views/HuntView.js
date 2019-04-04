import React, { Component } from "react";
import { Image, Button, Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import StickyHeader from "../StickyHeader";
import brett from "../../img/brettaz.jpg";
import A from "../../img/mapQuad1.png";

export class HuntView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Card style={{ margin: "auto", width: "70%" }}>
          <Card.Content>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Image src={brett} />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    floated="right"
                    src={A}
                    style={{ height: "97.5%", width: "100%" }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Card.Header>Name of the Hunt</Card.Header>
            <Card.Meta>UserName that Submitted the Hunt</Card.Meta>
            <Card.Description>Hunt Description</Card.Description>
          </Card.Content>
          <Card.Content extra style={{ margin: "auto" }}>
            <Link to="/hunt">
              <Button basic color="green">
                Submit Your Image
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default HuntView;

// {
/* <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Hunts 1" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Hunts 2" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Hunts 3" />
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Footer Header" />
            <p>Hunts inside the foot Hunts could help Huntssers.</p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size="mini" src="/logo.png" />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Hunts Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Hunts
          </List.Item>
          <List.Item as="a" href="#">
            Hunts and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Hunts
          </List.Item>
        </List>
      </Container>
    </Segment> */
// }
