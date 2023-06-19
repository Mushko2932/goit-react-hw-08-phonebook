import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, UserEmail, UserAvatar, LogOutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <div>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <UserAvatar></UserAvatar>
      </div>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </div>
  );
};

export default UserMenu;
