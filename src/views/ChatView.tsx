import * as React from 'react';
import {Dispatch} from 'redux';
import {MyAppState} from '../store/index';
import {IMessage} from '../store/chat/message/consts';
import * as actions from '../store/chat/message/actions';
import {connect} from 'react-redux';

export interface Props {
  messageList: IMessage[];
}

export interface State {
  currentMessage: IMessage;
}

export class ChatView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    console.log(this.props.messageList);
    return (
      <React.Fragment>
        <h1>Chat page</h1>
      </React.Fragment>
    );
  }
}

const mapsStateToProps = ({message}: MyAppState) => ({
  messageList: message.messageList,
  currentMessage: message.currentMessage,
});

const mapsDispatchToProps = (dispatch: Dispatch) => ({
  addMessage: (message: IMessage) => dispatch(actions.addMessage(message)),
});

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(ChatView);
