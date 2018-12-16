import * as React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  width: 100%;
`;

const ChatInput = styled.input``;

interface Props {
  onMessageChange?: (event: any) => void;
  onMessageSubmit: (event: any) => void;
  messageText?: string;
}

function ChatBoxComponent({
  onMessageChange,
  onMessageSubmit,
  messageText,
}: Props) {
  return (
    <ChatContainer>
      <form onSubmit={onMessageSubmit}>
        <ChatInput value={messageText} onChange={onMessageChange} />
      </form>
    </ChatContainer>
  );
}

export default ChatBoxComponent;
