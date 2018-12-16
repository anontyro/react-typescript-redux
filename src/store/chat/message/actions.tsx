import * as constants from './consts';

let nextMessageId = 0;

export interface AddMessage {
  payload: constants.IMessage;
  type: constants.ADD_MESSAGE;
}

export interface RecieveMessage {
  payload: constants.IMessage;
  type: constants.RECEIVE_MESSAGE;
}

export type MessageAction = AddMessage | RecieveMessage;

export function addMessage(message: constants.IMessage): AddMessage {
  return {
    payload: {
      author: message.author,
      id: nextMessageId++,
      message: message.message,
    },
    type: constants.ADD_MESSAGE,
  };
}

export function recieveMessage(message: constants.IMessage): RecieveMessage {
  return {
    payload: {
      author: message.author,
      id: nextMessageId++,
      message: message.message,
    },
    type: constants.RECEIVE_MESSAGE,
  };
}
