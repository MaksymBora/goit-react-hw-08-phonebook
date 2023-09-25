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
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const SignUp = () => {
  const paperStyle = {
    padding: '20px',
    minHeight: '72vh',
    width: 320,
    margin: '0 auto',
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };

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
    name: Yup.string().min(3, 'It`s too short').required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Required')
      .required('Required'),
    number: Yup.number()
      .typeError('Enter valid phone number')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password minimum length should be 8')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password not matched')
      .required('Required'),
    termAndConditions: Yup.string().oneOf(
      ['true'],
      'Accept terms & conditions'
    ),
  });

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

  return (
    <Grid>
      <Paper style={paperStyle} sx={{ fontSize: 16 }}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <span style={{ display: 'block', width: '100%', marginTop: '12px' }}>
            Sign Up
          </span>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic-name"
                name="name"
                label="Name"
                variant="outlined"
                type="text"
                placeholder="Enter name"
                fullWidth
              />
              <ErrorMessage name="name" />
              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic-email"
                name="email"
                label="Email"
                variant="outlined"
                placeholder="Enter email"
                fullWidth
              />
              <ErrorMessage name="email" />
              {/*======= Radio =========*/}
              <FormControl
                style={{ marginTop: '8px', width: '100%' }}
                component="fieldset"
              >
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-labelledby="gender"
                  id="outlined-basic-gender"
                  name="gender"
                  style={{ display: 'initial' }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>

              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic-number"
                label="Phone Number"
                name="number"
                variant="outlined"
                type="tel"
                placeholder="Enter phone number"
                fullWidth
              />
              <ErrorMessage name="number" />
              <Field
                as={TextField}
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
              <ErrorMessage name="password" />
              <Field
                as={TextField}
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
              <ErrorMessage name="confirmPassword" />
              <FormControlLabel
                control={<Field as={Checkbox} />}
                name="termAndConditions"
                label="I accept the terms and conditions."
              />
              <FormHelperText>
                <ErrorMessage name="termAndConditions" />
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
