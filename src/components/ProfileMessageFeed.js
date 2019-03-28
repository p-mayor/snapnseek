import React, { Component } from "react";
import ProfileMessageItem from "./ProfileMessageItem";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMessages, getUsers } from "../actions";

export class ProfileMessageFeed extends Component {
  state = { hasMore: true };
  componentDidMount() {
    this.props.getMessages(20, this.props.offset);
  }

  fetchMoreData = () => {
    if (this.props.messages.endOfMessages) {
      this.setState({ hasMore: false });
    } else {
      this.setState({ offset: this.props.offset + 20 }, () =>
        this.props.getMessages(20, this.props.offset)
      );
    }
  };
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Content>
          <Card.Header as="h2" textAlign="center">
            My Kweets
          </Card.Header>
          <InfiniteScroll
            dataLength={this.props.loggedInUser.messages.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            height={630}
            // loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: "center" }}>End of messages.</p>}
          >
            {this.props.loggedInUser.messages
              .sort((a, b) => {
                return b.id - a.id;
              })
              .map(message => (
                <ProfileMessageItem
                  key={message.id}
                  message={message}
                  displayName={this.props.loggedInUser.displayName}
                />
              ))}
          </InfiniteScroll>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  messages: state.messages,
  userList: state.users.userList,
  isMessageLoading: state.messages.getMessageLoading,
  endOfMessages: state.messages.endOfMessages,
  offset: state.messages.offset
});

const mapDispatchToProps = dispatch => {
  return {
    getMessages: (limit, offset) => {
      dispatch(getMessages(limit, offset));
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMessageFeed);
