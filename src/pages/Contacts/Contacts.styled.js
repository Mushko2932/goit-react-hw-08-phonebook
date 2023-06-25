import styled from '@emotion/styled';

export const PageContainer = styled.div`
  padding: 40px;
  height: 150vh;

  border-radius: 32px;
  background-color: #ffffff;
`;

export const ContactNavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 34px;

  margin: 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const NewContactBtn = styled.button`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  margin-top: 14px;
  padding: 20px 30px;
  width: 200px;
  height: 60px;
  text-align: center;

  color: #feff86;
  background-color: #0079ff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: none;
  border-radius: 14px;

  cursor: pointer;

  :hover,
  :focus {
    color: #0079ff;
    background: #feff86;
  }
`;
