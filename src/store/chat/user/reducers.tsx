import {UserAction} from './actions';
import {IUser, ADD_USER} from './consts';

export interface UserState {
  userList: IUser[];
}

export const userInitalState: UserState = {
  userList: [],
};

let userList = [];

export function users(
  state: UserState = userInitalState,
  action: UserAction
): UserState {
  switch (action.type) {
    case ADD_USER:
      userList = [...state.userList];
      userList.push(action.payload);
      return {...state, userList};
  }
  return state;
}
