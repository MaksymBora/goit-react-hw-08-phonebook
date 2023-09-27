import styled from 'styled-components';
import { TextField } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledField = styled(TextField)`
  div {
    color: ${props => props.theme.colors.loginForm.text};
    /* background-color: #d6d4d4; gray */
    background-color: ${props => props.theme.colors.loginForm.inputBg};
  }

  label {
    color: gray;
  }

  label.Mui-focused {
    color: ${props => props.theme.colors.loginForm.label};
  }

  fieldset {
    border-color: ${props => props.theme.colors.loginForm.border};
    border-width: 1px;
  }

  /* .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root
    .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline {
    border: none;
  } */
`;
// #1976d2

export const StyledOutlinedInput = styled(OutlinedInput)``;
