import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 25px;
  padding: 12px 10px 12px 10px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  color: rgb(105, 105, 105);
  font-size: 18px;
  font-weight: 500;

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    box-shadow: -1px 5px 8px -2px rgba(0, 0, 0, 0.65);
    color: #000;
  }
`;
