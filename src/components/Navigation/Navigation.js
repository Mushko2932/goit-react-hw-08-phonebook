import { useAuth } from 'hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import { Logo, MainNavLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Logo to="/">Phone book</Logo>
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
