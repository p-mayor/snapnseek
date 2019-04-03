import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../img/hunts.png";

const HuntView = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
            Project Name
          </Menu.Item>
        </Link>
        <Link to="/">
          <Menu.Item as="a">Hunts</Menu.Item>
        </Link>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Link to="/">
              <Dropdown.Item>Hunts</Dropdown.Item>
            </Link>
            <Dropdown.Item>Hunts</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Hunts</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Hunts</span>
              <Dropdown.Menu>
                <Dropdown.Item>Hunts</Dropdown.Item>
                <Dropdown.Item>Hunts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Hunts Hunts</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">Hunts</Header>
      <p>THunts.</p>
      <p>Hunts Hunts for single column Hunts.</p>

      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
      <Image src={logo} size="mini" style={{ marginTop: "2em" }} />
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Hunts 1" />
            <List link inverted>
              <List.Item as="a">Hunts One</List.Item>
              <List.Item as="a">Hunts Two</List.Item>
              <List.Item as="a">Hunts Three</List.Item>
              <List.Item as="a">Hunts Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Hunts 2" />
            <List link inverted>
              <List.Item as="a">Hunts One</List.Item>
              <List.Item as="a">Hunts Two</List.Item>
              <List.Item as="a">Hunts Three</List.Item>
              <List.Item as="a">Hunts Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Hunts 3" />
            <List link inverted>
              <List.Item as="a">Hunts One</List.Item>
              <List.Item as="a">Hunts Two</List.Item>
              <List.Item as="a">Hunts Three</List.Item>
              <List.Item as="a">Hunts Four</List.Item>
            </List>
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
    </Segment>
  </div>
);

export default HuntView;
