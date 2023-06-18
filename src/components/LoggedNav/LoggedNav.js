import { LoggedLink, LoggedList, LoggedListItem } from './LoggedNav.styled';

const LoggedNav = () => {
  return (
    <LoggedList>
      <LoggedListItem>
        <LoggedLink to="/login">LOGIN</LoggedLink>
      </LoggedListItem>
      <LoggedListItem>
        <LoggedLink to="/register">REGISTER</LoggedLink>
      </LoggedListItem>
    </LoggedList>
  );
};

export default LoggedNav;
