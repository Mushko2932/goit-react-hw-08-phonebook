import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavLink to="/">Phone book</NavLink>
      <nav>
        {isLoggedIn && (
          <ul>
            <li>
              <NavLink to="/contacts">CONTACTS</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;
