import {MessageAction} from './actions';
import {IMessage, ADD_MESSAGE, RECEIVE_MESSAGE} from './consts';

export interface MessageState {
  messageList: IMessage[];
  currentMessage: IMessage;
}

export const messageInitalState: MessageState = {
  messageList: [],
  currentMessage: {
    author: '',
    message: '',
    id: 0,
  },
};

let messageList = [];

export function message(
  state: MessageState = messageInitalState,
  action: MessageAction
): MessageState {
  switch (action.type) {
    case ADD_MESSAGE:
      messageList = [...state.messageList];
      messageList.push(action.payload);
      return {...state, messageList};
    case RECEIVE_MESSAGE:
      messageList = [...state.messageList];
      messageList.push(action.payload);
      return {...state, messageList};
  }

  return state;
}
