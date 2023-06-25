import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  UserName,
  UserEmail,
  UserAvatar,
  LogOutBtn,
  UserContainer,
  UserData,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserData>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserData>
      <UserAvatar></UserAvatar>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </UserContainer>
  );
};

export default UserMenu;
