import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin-bottom: 20px;
`;

export const Filter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  font-weight: 500;
`;

export const FilterField = styled.input`
  width: 340px;
  height: 30px;
  border: 0;
  border-radius: 4px;
`;
