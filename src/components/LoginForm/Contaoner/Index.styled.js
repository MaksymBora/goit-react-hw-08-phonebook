import styled from 'styled-components';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)`
  width: 320px;
  margin: 30px auto;

  div {
    background-color: ${props => props.theme.colors.loginForm.bg};
  }

  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-1ps6pg7-MuiPaper-root {
    color: ${props => props.theme.colors.loginForm.text};
  }

  .css-1bkggpj-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: ${props => props.theme.colors.loginForm.btnActive};
  }

  .css-1aquho2-MuiTabs-indicator {
    background-color: ${props => props.theme.colors.loginForm.borderActive};
  }

  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-o350oy-MuiPaper-root {
    background-color: ${props => props.theme.colors.loginForm.bg};
  }
`;
