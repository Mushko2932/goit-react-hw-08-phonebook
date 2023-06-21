import styled from '@emotion/styled';

export const PageContainer = styled.div`
  padding: 30px 30px;
  height: 100vh;

  border-radius: 32px;
  background-color: #f9f9f9;
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

  padding: 20px 30px;
  text-align: center;

  color: #ffffff;
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
