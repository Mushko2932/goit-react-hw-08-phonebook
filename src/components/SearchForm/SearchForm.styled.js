import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
`;

export const Filter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 500;
`;

export const FilterField = styled.input`
  width: 250px;
  height: 30px;
  border: 2px solid #0079ff;
  border-radius: 4px;
`;
