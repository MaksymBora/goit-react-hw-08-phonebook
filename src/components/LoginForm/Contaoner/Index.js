import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { StyledPaper } from './Index.styled';

const AuthUserForm = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <StyledPaper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            label="Sign In"
            sx={{
              ml: 'auto',
              mr: 'auto',
              width: '50%',
            }}
          />
          <Tab label="Sign Up" sx={{ ml: 'auto', mr: 'auto', width: '50%' }} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Login handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUp />
        </CustomTabPanel>
      </StyledPaper>
    </>
  );
};

export default AuthUserForm;
