import { useAuth } from 'hook';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// export const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();

//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   if (shouldRedirect) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };
