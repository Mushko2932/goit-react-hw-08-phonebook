import { useAuth } from 'hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import {
  NavLogo,
  MainNavLink,
  MainNavItem,
  MainNavList,
} from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavLogo to="/">Phone book</NavLogo>
      <nav>
        {isLoggedIn && (
          <MainNavList>
            <MainNavItem>
              <MainNavLink to="/contacts">Contacts</MainNavLink>
            </MainNavItem>
          </MainNavList>
        )}
      </nav>
    </>
  );
};

export default Navigation;
