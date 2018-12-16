import * as React from 'react';
import styled from 'styled-components';
import {IMessage} from 'src/store/chat/message/consts';

const ChatWindowContainer = styled.div``;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface MessageItemProps {
  message: IMessage;
}

function MessageItem({message}: MessageItemProps) {
  return (
    <MessageContainer>
      <h3>{message.author}</h3>
      <p>{message.message}</p>
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
