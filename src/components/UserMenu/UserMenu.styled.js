import styled from '@emotion/styled';

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  text-align: right;

  color: #000000;
`;
export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: right;

  color: #8f8f8f;
`;

export const UserAvatar = styled.div`
  width: 80px;
  height: 80px;

  background-color: #efefef;
  border-radius: 14px;
  margin-bottom: 20px;
`;

export const LogOutBtn = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  padding: 18px 26px;

  color: #ffffff;
  background-color: #0079ff;

  border: 1px solid #fabb18;
  border-radius: 14px;

  cursor: pointer;

  :hover,
  :focus {
    color: #0079ff;
    background: #feff86;
  }
`;
