import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import SimpleUserImage from "./SimpleUserImage";

export class UserItem extends Component {
  render() {
    return (
      <React.Fragment>
        <Table.Row style={{ margin: "auto", textAlign: "center" }}>
          <Table.Cell>
            <SimpleUserImage
              size="tiny"
              textAlign="center"
              userId={this.props.id}
              style={{ margin: "auto" }}
            />
          </Table.Cell>
          <Table.Cell style={{ textAlign: "center" }}>
            {this.props.displayName}
          </Table.Cell>
          <Table.Cell style={{ textAlign: "center" }}>
            {this.props.score} {" Guesses"}
          </Table.Cell>
        </Table.Row>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    err: auth.loginError,
    token: auth.login.token
  }),
  null
)(UserItem);
