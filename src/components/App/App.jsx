import {lazy, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import SignInOutContainer from 'components/LoginForm/Contaoner/Index';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hook';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute, ProtectedRoute } from 'components/PrivateRoute.js/PrivateRoute';



const Home = lazy(() => import('../../Pages/Home'));
const ContactDetails = lazy(() => import('../../Pages/ContactDetails/ContactDetails'));
const PhoneView = lazy(() => import('../../Pages/PhoneView/PhoneView'));
const ContactEdit = lazy(() => import('../../Pages/ContactEdit/ContactEdit'));
const AddContacts = lazy(() => import('../../Pages/AddContacts/AddContacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

    return isRefreshing ? (<div>Loading...</div>) : (
      <>
        <Routes>
          <Route path="/" element={ <Layout/> }> 
            <Route index element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="contact/:id" element={ <PrivateRoute component={ContactDetails} redirectTo="/login" />} >
              <Route index element={ <PhoneView/>} />
              <Route path="edit" element={ <ContactEdit/>} />
            </Route>
            <Route path="addContact" element={ <PrivateRoute component={AddContacts} redirectTo="/login" />} />
            <Route path="login" element={ <RestrictedRoute component={ SignInOutContainer } redirectTo="/"/> } />
          </Route>
        </Routes>
      </>
    )
}