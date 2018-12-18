import * as React from 'react';
import styled from 'styled-components';
import {IMessage} from 'src/store/chat/message/consts';

const ChatWindowContainer = styled.div`
  width: 75%;
  background-color: #00000008;
  padding: 10px;
  height: 50vw;
  overflow-y: auto;
`;

const MessageAuthor = styled.span`
  font-weight: 800;
  float: left;
  width: max-content;
  background-color: #4196ea;
  padding: 5px 10px;
  border: 1px solid #011326;
  border-radius: 50px;
  color: wheat;
  box-shadow: 1px 2px 3px black;
`;

const MessageText = styled.p`
  background-color: white;
  padding: 10px 20px;
  border-radius: 20px;
  ::after {
    background-color: white;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

interface MessageItemProps {
  message: IMessage;
}

function MessageItem({message}: MessageItemProps) {
  return (
    <MessageContainer>
      <MessageAuthor>{message.author}</MessageAuthor>
      <MessageText>{message.message}</MessageText>
    </MessageContainer>
  );
}

interface Props {
  messageList: IMessage[];
}
function ChatWindowComponent({messageList}: Props) {
  const displayMessages = messageList.map((message: IMessage) => {
    return <MessageItem key={message.id} message={message} />;
  });

  return <ChatWindowContainer>{displayMessages}</ChatWindowContainer>;
}

export default ChatWindowComponent;
