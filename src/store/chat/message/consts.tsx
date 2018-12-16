export const ADD_MESSAGE = 'ADD_MESSAGE';
export type ADD_MESSAGE = typeof ADD_MESSAGE;

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export type RECEIVE_MESSAGE = typeof RECEIVE_MESSAGE;

export interface IMessage {
  author: string;
  message: string;
  id?: number;
}
