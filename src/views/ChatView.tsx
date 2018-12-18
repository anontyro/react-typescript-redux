import * as React from 'react';
import {Dispatch} from 'redux';
import styled from 'styled-components';
import {MyAppState} from '../store/index';
import {IMessage} from '../store/chat/message/consts';
import * as actions from '../store/chat/message/actions';
import {connect} from 'react-redux';
import ChatBoxComponent from './components/chat/chatBox/ChatBoxComponent';
import ChatWindowComponent from './components/chat/chatWindow/ChatWindowComponent';
import {IUser} from 'src/store/chat/user/consts';
import UserListComponent from './components/chat/userList/UserListComponent';

const ChatContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid whitesmoke;
  border-radius: 5px;
  box-shadow: 1px 1px 9px 0px wheat;
`;

const ChatTopContainer = styled.div`
  display: flex;
`;

interface Props {
  messageList: IMessage[];
  username: string;
  userList: IUser[];
  addMessage: (message: IMessage) => void;
}

interface State {
  currentMessage: string;
}

export class ChatView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {currentMessage: ''};
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }

  onMessageChange(event: any) {
    event.preventDefault();
    this.setState({
      currentMessage: event.currentTarget.value,
    });
  }

  onMessageSubmit(event: any) {
    event.preventDefault();
    if (this.state.currentMessage.length < 3) {
      return;
    }
    const message: IMessage = {
      author: this.props.username,
      message: this.state.currentMessage,
    };
    this.props.addMessage(message);
    this.setState({
      currentMessage: '',
    });
  }

  public render() {
    const {username, userList} = this.props;
    return (
      <React.Fragment>
        <h1>{username}'s Chat page</h1>
        <ChatContainer>
          <ChatTopContainer>
            <UserListComponent username={username} userList={userList} />
            <ChatWindowComponent messageList={this.props.messageList} />
          </ChatTopContainer>
          <ChatBoxComponent
            messageText={this.state.currentMessage}
            onMessageSubmit={this.onMessageSubmit}
            onMessageChange={this.onMessageChange}
          />
        </ChatContainer>
      </React.Fragment>
    );
  }
}

const mapsStateToProps = ({message, general, users}: MyAppState) => ({
  messageList: message.messageList,
  currentMessage: message.currentMessage,
  username: general.username,
  userList: users.userList,
});

const mapsDispatchToProps = (dispatch: Dispatch) => ({
  addMessage: (message: IMessage) => dispatch(actions.addMessage(message)),
});

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(ChatView);
