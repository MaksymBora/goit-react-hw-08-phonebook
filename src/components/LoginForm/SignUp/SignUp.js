import React from 'react';
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  RadioGroup,
  TextField,
  Typography,
  Radio,
  Checkbox,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  StyledErrorMessage,
  StyledInput,
  StyledTitle,
  StyledSpanTitle,
  StyledRadioGroup,
  StyledRadioBtn,
  StyledFormLabel,
  StyledCheckbox,
} from './SignUp.styled';
import { selectTheme } from 'redux/userTheme/slice';

const initialValues = {
  name: '',
  email: '',
  gender: '',
  number: '',
  password: '',
  confirmPassword: '',
  termAndConditions: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'It`s too short').required('Required*'),
  email: Yup.string().email('Enter valid email').required('Required*'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Required*')
    .required('Required*'),
  number: Yup.number()
    .typeError('Enter valid phone number')
    .required('Required*'),
  password: Yup.string()
    .min(8, 'Password minimum length should be 8')
    .required('Required*'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password not matched')
    .required('Required*'),
  termAndConditions: Yup.string().oneOf(['true'], 'Accept terms & conditions'),
});

const SignUp = () => {
  const userTheme = useSelector(selectTheme);

  const colorGender = userTheme === 'light' ? 'rgb(105, 105, 105)' : '#ffffff';

  const paperStyle = {
    padding: '20px',
    minHeight: '72vh',
    width: 320,
    margin: '0 auto',
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };

  const dispatch = useDispatch();

  const onSubmit = (values, props) => {
    const { name, email, password } = values;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      values.termAndConditions = false;
    }, 2000);
  };

  const inputProps = {};

  return (
    <Grid>
      <Paper style={paperStyle} sx={{ fontSize: 16 }}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <StyledSpanTitle
            style={{ display: 'block', width: '100%', marginTop: '12px' }}
          >
            Sign Up
          </StyledSpanTitle>
          <StyledTitle variant="caption">
            Please fill this form to create an account
          </StyledTitle>
        </Grid>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <Field
                as={StyledInput}
                sx={{ mt: 3 }}
                id="outlined-basic-name"
                name="name"
                label="Name"
                variant="outlined"
                type="text"
                placeholder="Enter name"
                fullWidth
                inputProps={inputProps}
              />
              <StyledErrorMessage name="name" component="span" />
              <Field
                as={StyledInput}
                sx={{ mt: 3 }}
                id="outlined-basic-email"
                name="email"
                label="Email"
                variant="outlined"
                placeholder="Enter email"
                type="email"
                fullWidth
              />
              <StyledErrorMessage name="email" component="span" />
              {/*======= Radio =========*/}
              <FormControl
                style={{ marginTop: '8px', width: '100%' }}
                component="fieldset"
              >
                <StyledFormLabel
                  component="legend"
                  sx={{
                    color: colorGender,
                    '&.Mui-focused': { color: '#47a76a' },
                  }}
                >
                  Gender
                </StyledFormLabel>
                <Field
                  as={StyledRadioGroup}
                  aria-labelledby="gender"
                  id="outlined-basic-gender"
                  name="gender"
                  style={{ display: 'initial' }}
                >
                  <FormControlLabel
                    value="female"
                    control={<StyledRadioBtn />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<StyledRadioBtn />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <StyledErrorMessage name="gender" component="span" />
              </FormHelperText>

              <Field
                as={StyledInput}
                sx={{ mt: 3 }}
                id="outlined-basic-number"
                label="Phone Number"
                name="number"
                variant="outlined"
                type="tel"
                placeholder="Enter phone number"
                fullWidth
              />
              <StyledErrorMessage name="number" component="span" />
              <Field
                as={StyledInput}
                sx={{ mt: 3 }}
                id="reg-password"
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                placeholder="Enter password"
                fullWidth
                autoComplete="on"
              />
              <StyledErrorMessage name="password" component="span" />
              <Field
                as={StyledInput}
                sx={{ mt: 3 }}
                id="conf-password"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                placeholder="Confirm password"
                fullWidth
                autoComplete="on"
              />
              <StyledErrorMessage name="confirmPassword" component="span" />
              {/* <StyledCheckbox
                control={<Field as={Checkbox} />}
                name="termAndConditions"
                label="I accept the terms and conditions."
              /> */}
              <Field
                as={StyledCheckbox}
                control={<Checkbox />}
                label="I accept the terms and conditions."
                name="termAndConditions"
                sx={{ width: '100%', mt: '12px' }}
              />
              <FormHelperText>
                <StyledErrorMessage name="termAndConditions" component="span" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? 'Loading' : 'Sign up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
