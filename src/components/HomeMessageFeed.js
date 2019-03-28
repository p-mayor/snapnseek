import React, { Component } from "react";
import HomeMessageItem from "./HomeMessageItem";
import { getMessages, getUsers } from "../actions";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";

export class HomeMessageFeed extends Component {
  state = { hasMore: true };
  componentDidMount() {
    this.props.getMessages(20, this.props.offset);
    this.props.getUsers();
  }
  matchIdtoUsername = userId => {
    let user = this.props.userList.find(user => user.id === userId);
    if (user) return user.displayName;
    return "Deleted";
  };

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
            Kweets
          </Card.Header>
          <InfiniteScroll
            dataLength={this.props.messages.messages.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            height={500}
            // loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: "center" }}>End of messages.</p>}
          >
            {this.props.messages.messages.map(message => {
              let user = this.props.userList.find(
                user => user.id === message.userId
              );
              if (user) {
                return (
                  <HomeMessageItem
                    key={message.id}
                    message={message}
                    displayName={this.matchIdtoUsername(message.userId)}
                  />
                );
              }
              return null;
            })}
          </InfiniteScroll>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
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
)(HomeMessageFeed);
