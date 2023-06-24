import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
`;

export const LoggedListItem = styled.li`
  list-style: none;
`;

export const LoggedLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 20px;
  padding: 20px 40px;

  color: #feff86;
  background-color: #0079ff;

  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #0079ff;
    background-color: #feff86;
  }
`;
