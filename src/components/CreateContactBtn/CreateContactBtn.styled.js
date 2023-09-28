import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export const PaperStyled = styled(Paper)`
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.header.border};

  &:hover {
    box-shadow: 0px 2px 14px -1px ${props => props.theme.colors.header.boxShadowHover};
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    max-width: 110px;
    margin-left: 20px;
    font-size: 14px;
    padding: 6px 12px;
  }

  @media screen and (min-width: ${props => props.theme.media.l}) {
    min-width: 150px;
    margin-left: 0;
    font-size: 14px;
    padding: 12px 8px 12px 10px;
  }
`;

export const StyledLink = styled(Link)`
  display: none;
  text-decoration: 'none';

  @media screen and (min-width: ${props => props.theme.media.m}) {
    display: block;
  }
`;

export const BtnText = styled.p`
  color: ${props => props.theme.colors.header.text};
`;

export const MobStyledLink = styled(Link)`
  text-decoration: 'none';
  position: absolute;
  right: 0;
  bottom: -55vh;

  div {
    background: linear-gradient(to right, #11998e, #38ef7d);
  }

  @media screen and (min-height: 271px) {
    bottom: -55vh;
  }

  @media screen and (min-height: 400px) {
    bottom: -65vh;
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    display: none;
  }
`;

export const AddIcontStyled = styled(AddIcon)`
  color: ${props => props.theme.colors.header.text};
`;