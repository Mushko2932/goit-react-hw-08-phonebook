import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ContactBtn = styled.button`
  padding: 4px;
  background-color: hotpink;
  font-size: 14px;
  min-width: 120px;
  height: 30px;
  cursor: pointer;
  background-color: #0079ff;
  color: #feff86;

  border: none;
  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #0079ff;
    background: #feff86;
  }
`;

export const ContactInfo = styled.p`
  width: 600px;
  font-size: 16px;
  font-weight: 500;
`;
