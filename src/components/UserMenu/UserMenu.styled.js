import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  text-align: center;

  color: #000000;
`;
export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: center;

  color: #8f8f8f;
`;

export const UserAvatar = styled.div`
  width: 80px;
  height: 80px;

  text-align: center;

  background-color: #efefef;
  border-radius: 14px;
  margin-bottom: 20px;
`;

export const LogOutBtn = styled.button`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  padding: 20px 30px;
  text-align: center;

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
