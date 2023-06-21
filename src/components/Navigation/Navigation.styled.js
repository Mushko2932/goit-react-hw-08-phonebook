import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLogo = styled(NavLink)`
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  color: #0079ff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #feff86;
    > span {
      color: #000000;
    }
  }
`;

export const MainNavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const MainNavItem = styled.li`
  list-style: none;
`;

export const MainNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 20px;
  padding: 20px 30px;

  color: #feff86;
  background-color: #0079ff;

  border-radius: 14px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #0079ff;
    background-color: #feff86;
  }
`;
