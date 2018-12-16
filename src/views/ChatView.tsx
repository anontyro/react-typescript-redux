import * as React from 'react';
import {Dispatch} from 'redux';
import {MyAppState} from '../store/index';
import {IMessage} from '../store/chat/message/consts';
import * as actions from '../store/chat/message/actions';
import {connect} from 'react-redux';

export interface Props {
  messageList: IMessage[];
  username: string;
}

export interface State {
  currentMessage: string;
}

export class ChatView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onMessageChange(event: any) {
    event.preventDefault();
    this.setState({
      currentMessage: event.currentTarget.value,
    });
  }

  public render() {
    const {username} = this.props;
    console.log(this.props.messageList);
    return (
      <React.Fragment>
        <h1>{username}'s Chat page</h1>
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
