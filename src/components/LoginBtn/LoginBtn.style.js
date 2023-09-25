import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 25px;
  padding: 12px 10px 12px 10px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: rgb(105, 105, 105);

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    box-shadow: -1px 5px 8px -2px rgba(0, 0, 0, 0.65);
    color: rgb(71, 167, 106);
  }
`;
