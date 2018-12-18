import * as constants from './consts';

let nextUserId = 0;

export interface AddUser {
  payload: constants.IUser;
  type: constants.ADD_USER;
}

export type UserAction = AddUser;

export function addUser(user: constants.IUser): AddUser {
  return {
    payload: {
      username: user.username,
      userId: user.userId ? user.userId : nextUserId++,
      location: user.location,
    },
    type: constants.ADD_USER,
  };
}
