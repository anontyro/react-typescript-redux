import * as React from 'react';
import {Dispatch} from 'redux';
import {MyAppState} from '../store/index';
import {IMessage} from '../store/chat/message/consts';
import * as actions from '../store/chat/message/actions';
import {connect} from 'react-redux';
import ChatBoxComponent from './components/chat/chatBox/ChatBoxComponent';

export interface Props {
  messageList: IMessage[];
  username: string;
  addMessage: (message: IMessage) => void;
}

export interface State {
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
    const {username} = this.props;
    return (
      <React.Fragment>
        <h1>{username}'s Chat page</h1>
        <p>Message: {this.state.currentMessage}</p>
        <ChatBoxComponent
          messageText={this.state.currentMessage}
          onMessageSubmit={this.onMessageSubmit}
          onMessageChange={this.onMessageChange}
        />
      </React.Fragment>
    );
  }
}

const mapsStateToProps = ({message, general}: MyAppState) => ({
  messageList: message.messageList,
  currentMessage: message.currentMessage,
  username: general.username,
});

const mapsDispatchToProps = (dispatch: Dispatch) => ({
  addMessage: (message: IMessage) => dispatch(actions.addMessage(message)),
});

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(ChatView);
