import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Renders the list of messages from the users.
 * @param {Object} message - object containing the message's value, author, type and timestamp
 * @param {Boolean} isSelfMessage - indicates if the message is from the current user
 */
const Message = ({ message, isSelfMessage }) =>
  message.type === "USR" ? (
    <UserMessageWrapper>
      <MessageContent isSelfMessage={isSelfMessage}>
        <StyledAuthor>{message.username}</StyledAuthor>
        <StyledMessage>{message.value}</StyledMessage>
      </MessageContent>
    </UserMessageWrapper>
  ) : (
    <SystemMessageWrapper>{message.value}</SystemMessageWrapper>
  );

Message.propTypes = {
  message: PropTypes.object.isRequired,
  isSelfMessage: PropTypes.bool.isRequired
};

const UserMessageWrapper = styled.div`
  text-align: right;
  display: flex;
  word-wrap: break-word;
`;

const MessageContent = styled.div`
  display: flex;
  max-width: 500px;
  min-width: 200px;
  flex-direction: column;
  margin-left: ${props => (props.isSelfMessage ? "auto" : "0")};
  border-radius: 10px;
  background: ${props => (props.isSelfMessage ? "#48A9A6" : "#E4DFDA")};
  padding: 15px;
`;

const StyledMessage = styled.span`
  text-align: left;
`;

const StyledAuthor = styled.span`
  text-align: left;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const SystemMessageWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

export default Message;
