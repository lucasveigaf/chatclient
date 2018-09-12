import React from "react";
import styled from "styled-components";
import { sendMsg } from "../../api/chat";

/**
 * Renders a form for the user to enter a new message.
 */
class NewMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  /**
   * Updates the input state's value with what is being typed.
   */
  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  /**
   * Upon submiting the form, clears the input and sends the user's message to the server if it's length
   * is greater than 0.
   */
  handleSubmit = event => {
    if (this.state.inputValue.length) {
      sendMsg(this.state.inputValue);
    }
    this.setState({ inputValue: "" });
    event.preventDefault();
  };

  render = () => (
    <StyledForm onSubmit={this.handleSubmit}>
      <StyledInput
        value={this.state.inputValue}
        onChange={this.handleInputChange}
      />
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #4357ad;
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  cursor: pointer;
`;

export default NewMessage;
