import styled from 'styled-components';
import { TextField, FormControlLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { ErrorMessage } from 'formik';

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

  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colors.loginForm.border};
  }

  &
    .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colors.loginForm.focusedInput};
  }
`;
// #1976d2

export const StyledOutlinedInput = styled(OutlinedInput)`
  & .css-1laqsz7-MuiInputAdornment-root button {
    color: ${props => props.theme.colors.loginForm.iconBtn};
  }

  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colors.loginForm.border};
  }

  & .MuiOutlinedInput-notchedOutline {
    /* border-color: red !important; */
  }

  #ador-password {
    color: ${props => props.theme.colors.loginForm.text};
  }
`;

export const StyledCheckbox = styled(FormControlLabel)`
  color: ${props => props.theme.colors.loginForm.text};

  && .MuiCheckbox-root {
    color: ${props => props.theme.colors.loginForm.checkboxBorder};
  }

  && .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: ${props => props.theme.colors.loginForm.checkboxChecked};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;
