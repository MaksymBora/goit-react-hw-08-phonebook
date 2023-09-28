import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import {
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
} from '@mui/material';

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;

export const StyledInput = styled(TextField)`
  div {
    color: ${props => props.theme.colors.loginForm.text};
    background-color: ${props => props.theme.colors.loginForm.inputBg};
  }

  label {
    color: gray;
  }

  label.Mui-focused {
    color: ${props => props.theme.colors.loginForm.label};
  }

  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colors.loginForm.border};
  }

  &
    .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colors.loginForm.focusedInput};
  }
`;

export const StyledSpanTitle = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.loginForm.text};
`;

export const StyledTitle = styled(Typography)`
  color: ${props => props.theme.colors.loginForm.text};
`;

export const StyledFormLabel = styled(FormLabel)`
  && .css-1glqnx5-MuiFormLabel-root.Mui-focused {
    color: red;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  color: ${props => props.theme.colors.loginForm.text};

  /* & .Mui-checked {
    background-color: red;
  } */

  .css-hyxlzm {
    color: ${props => props.theme.colors.loginForm.radioChecked};
  }
`;

export const StyledRadioBtn = styled(Radio)`
  & .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {
    background-color: red;
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
