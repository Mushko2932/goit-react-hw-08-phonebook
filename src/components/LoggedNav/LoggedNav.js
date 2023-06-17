const { NavLink } = require('react-router-dom');

const LoggedNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="login">LOGIN</NavLink>
      </li>
      <li>
        <NavLink to="register">REGISTER</NavLink>
      </li>
    </ul>
  );
};

export default LoggedNav;
