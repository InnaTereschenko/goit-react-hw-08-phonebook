import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => { // component - ContactsPage
  const { isLoggedIn, isRefreshing } = useAuth(); // isLoggedIn - true or false
  const shouldRedirect = !isLoggedIn && !isRefreshing; // якщо isLoggedIn = false and isRefreshing = false, тоді shouldRedirect = true
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component/>; // if shouldRedirect is true, тоді redirect to redirectTo, інакше рендеримо Component
};

export default PrivateRoute;