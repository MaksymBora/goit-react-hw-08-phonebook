import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export const PaperStyled = styled(Paper)`
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  font-weight: 500;

  &:hover {
    box-shadow: -1px 5px 8px -2px rgba(0, 0, 0, 0.65);
  }

  @media screen and (min-width: 767px) {
    max-width: 110px;
    margin-left: 20px;
    font-size: 14px;
    padding: 6px 12px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 150px;
    margin-left: 0;
    font-size: 14px;
    padding: 12px 10px 12px 10px;
  }
`;

export const StyledLink = styled(Link)`
  display: none;
  text-decoration: 'none';

  @media screen and (min-width: 767px) {
    display: block;
  }
`;

export const BtnText = styled.p``;

export const MobStyledLink = styled(Link)`
  text-decoration: 'none';
  position: absolute;
  right: 0;
  bottom: -55vh;

  @media screen and (min-height: 271px) {
    bottom: -55vh;
  }

  @media screen and (min-height: 400px) {
    bottom: -72vh;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
