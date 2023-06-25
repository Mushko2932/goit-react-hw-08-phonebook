import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-right: 40px;
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  text-align: center;
  margin: 0;

  color: #000000;
`;
export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  text-align: center;
  margin: 0;

  color: #8f8f8f;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;

  text-align: center;
  margin-right: 20px;

  background-color: #000000;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const LogOutBtn = styled.button`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  padding: 20px 30px;
  text-align: center;
  width: 200px;
  height: 60px;

  color: #feff86;
  background-color: #0079ff;

  border: none;
  border-radius: 14px;

  cursor: pointer;

  :hover,
  :focus {
    color: #0079ff;
    background: #feff86;
  }
`;
