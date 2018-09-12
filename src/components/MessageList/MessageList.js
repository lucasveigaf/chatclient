import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "../Message/Message";
import { connect, disconnect } from "../../api/chat";

/**
 * Renders the list of messages from the users.
 * @param {String} username - username value entered by the user.
 */
class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  /**
   * Only updates the component when the length of the message list changes.
   */
  shouldComponentUpdate = (nextProps, nextState) =>
    nextState.messageList.length !== this.state.messageList.length;

  /**
   * Disconnect from the server when the components unmounts.
   */
  componentWillUnmount = () => {
    disconnect();
  };

  /**
   * Connect to the server when the components mounts.
   */
  componentDidMount = () => {
    connect(
      this.props.username,
      (err, msg) => {
        this.setState({ messageList: [...this.state.messageList, msg] });
      }
    );
  };

  /**
   * Sets the scroll of the message list container to the bottom when a new message is received.
   */
  componentDidUpdate = () => {
    if (this.messageListRef) {
      this.messageListRef.scrollTop = this.messageListRef.scrollHeight;
    }
  };

  render = () => (
    <MessageListWrapper innerRef={ref => (this.messageListRef = ref)}>
      {this.state.messageList.map((msg, i) => (
        <Message
          key={i}
          message={msg}
          isSelfMessage={msg.username === this.props.username}
        />
      ))}
    </MessageListWrapper>
  );
}

MessageList.propTypes = {
  username: PropTypes.string.isRequired
};

const MessageListWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  > div {
    margin-bottom: 15px;
  }
  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`;

export default MessageList;
