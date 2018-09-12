import React, { Component } from "react";
import styled from "styled-components";
import MessageList from "../MessageList/MessageList";
import JoinChat from "../JoinChat/JoinChat";
import NewMessage from "../NewMessage/NewMessage";

/**
 * The app starting point. It is responsible for rendering the main components and the communication between
 * them.
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  /**
   * Callback function called when the user enters a username. It saves the value in the state.
   * @param {String} username - username value entered by the user.
   */
  handleJoinChat = username => {
    this.setState({ username });
  };

  render() {
    return (
      <AppWrapper>
        {!this.state.username && <JoinChat onSubmit={this.handleJoinChat} />}
        {this.state.username && (
          <ChatWrapper>
            <MessageList username={this.state.username} />
            <NewMessage />
          </ChatWrapper>
        )}
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  height: 100vh;
  background: #f0f7ee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatWrapper = styled.div`
  background: #f0f7ee;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
