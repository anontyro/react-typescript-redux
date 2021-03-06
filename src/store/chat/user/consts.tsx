export const ADD_USER = 'ADD_USER';
export type ADD_USER = typeof ADD_USER;

export interface IUser {
  username: string;
  location?: string;
  enteredChat?: Date;
  userId?: number;
}
