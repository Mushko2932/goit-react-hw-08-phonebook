import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';
import { AppBarHeader } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </AppBarHeader>
  );
};

export default AppBar;
