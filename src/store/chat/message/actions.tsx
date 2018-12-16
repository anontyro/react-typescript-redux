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

export function addMessage(author: string, message: string): AddMessage {
  return {
    payload: {
      author,
      id: nextMessageId++,
      message,
    },
    type: constants.ADD_MESSAGE,
  };
}

export function recieveMessage(
  author: string,
  message: string
): RecieveMessage {
  return {
    payload: {
      author,
      id: nextMessageId++,
      message,
    },
    type: constants.RECEIVE_MESSAGE,
  };
}
