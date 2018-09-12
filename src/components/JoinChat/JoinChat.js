import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Renders a form for the user to enter a username.
 * @param {Function} onSubmit - Callback function to be called when the user submits the form.
 */
class JoinChat extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  /**
   * Updates the input state's value with what is being typed. Limited to 25 chars.
   */
  handleInputChange = event => {
    this.setState({
      inputValue:
        event.target.value.length < 25
          ? event.target.value
          : this.state.inputValue
    });
  };

  /**
   * Handled the submission of the form, calling the callback function passed as a prop.
   */
  handleSubmit = event => {
    this.props.onSubmit(this.state.inputValue);
    event.preventDefault();
  };

  render = () => (
    <StyledForm onSubmit={this.handleSubmit}>
      <WelcomeMessage>Enter your username</WelcomeMessage>
      <StyledInput
        value={this.state.inputValue}
        onChange={this.handleInputChange}
      />
      <StyledButton type="submit">Enter</StyledButton>
    </StyledForm>
  );
}

JoinChat.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const StyledForm = styled.form`
  border-radius: 15px;
  width: 400px;
  height: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
  > * {
    margin-bottom: 20px;
  }
  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 20px;
  color: #48a9a6;
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

export default JoinChat;
