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
  & .MuiInputBase-root .MuiOutlinedInput-root .MuiInputBase-formControl {
    /* background-color: red !important; */
  }

  & .MuiInputBase-formControl {
    /* color: red; */
  }

  & .css-09k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused {
    /* color: red; */
    border-color: green !important;
  }

  /* &
    .css-09k5xi-MuiInputBase-root-MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline {
    border-color: green !important;
    background-color: red !important;
    color: red !important;
    border: none !important;
  } */

  & .css-1laqsz7-MuiInputAdornment-root button {
    color: green;
  }

  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: orange !important;
  }

  & .MuiOutlinedInput-notchedOutline {
    /* border-color: red !important; */
  }
`;
