import {lazy, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { ThemeProvider } from 'styled-components';
import { Layout } from "components/Layout/Layout";
import AuthUserForm from 'components/LoginForm/Container/Index';
import { useAuth } from 'hook';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute.js/PrivateRoute';
import CircularProgress from '@mui/material/CircularProgress';
import { darkTheme, lightTheme } from 'components/styleTheme/theme';
import { selectTheme } from 'redux/userTheme/slice';
import { setMainStyles } from 'components/styleTheme/setMainStyles';

const Home = lazy(() => import('../../Pages/Home'));
const ContactDetails = lazy(() => import('../../Pages/ContactDetails/ContactDetails'));
const PhoneView = lazy(() => import('../../Pages/PhoneView/PhoneView'));
const ContactEdit = lazy(() => import('../../Pages/ContactEdit/ContactEdit'));
const AddContacts = lazy(() => import('../../Pages/AddContacts/AddContacts'));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const userTheme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
    useEffect(() => {
    setMainStyles(userTheme);
    }, [userTheme]);
  


  return (<ThemeProvider theme={userTheme === 'dark' ? darkTheme : lightTheme}>
    { isRefreshing ? (<div
      style={ {
        display: 'flex',
        marginTop: '100px',
      } }
    >
      <div style={ { marginLeft: 'auto', marginRight: 'auto' } }>
        <CircularProgress color="success" />
      </div>
    </div>) : (
      <>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <PrivateRoute component={ <Home /> } redirectTo="/login" /> } />
            <Route path="contact/:id" element={ <PrivateRoute component={ <ContactDetails /> } redirectTo="/login" /> } >
              <Route index element={ <PhoneView /> } />
              <Route path="edit" element={ <ContactEdit /> } />
            </Route>
            <Route path="addContact" element={ <PrivateRoute component={ <AddContacts /> } redirectTo="/login" /> } />
            <Route path="login" element={ <RestrictedRoute component={ <AuthUserForm /> } redirectTo="/" /> } />
          </Route>
        </Routes>
      </>
    ) }
    </ThemeProvider>)
}