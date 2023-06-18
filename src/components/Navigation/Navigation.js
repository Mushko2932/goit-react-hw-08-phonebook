import { useAuth } from 'hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import { NavLogo, MainNavLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavLogo to="/">Phone book</NavLogo>
      <nav>
        {isLoggedIn && (
          <ul>
            <li>
              <MainNavLink to="/contacts">CONTACTS</MainNavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;
