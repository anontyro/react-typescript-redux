import * as React from 'react';
import styled from 'styled-components';
import {IUser} from 'src/store/chat/user/consts';

const UserListContainer = styled.div`
  margin: 10px;
  padding-right: 10px;
  border-right: 1px solid #cecdcd;
`;

interface UserItemProps {
  user: IUser;
  isUser?: boolean;
}

function UserItem({user, isUser}: UserItemProps) {
  return <h3>{user.username}</h3>;
}

function createUserList(userList: IUser[]) {
  if (!userList || userList.length === 0) {
    return <h3>No users in chat</h3>;
  }
  const output: any[] = [];
  userList.map((user: IUser) => {
    output.push(<UserItem user={user} />);
  });
  return output;
}

interface Props {
  username: string;
  userList: any;
}

function UserListComponent({username, userList}: Props) {
  const mainUser: IUser = {username, userId: 0};

  return (
    <UserListContainer>
      <UserItem user={mainUser} isUser />
      {createUserList(userList)}
    </UserListContainer>
  );
}

export default UserListComponent;
