import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth(); // isLoggedIn - true or false
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>; // якщо isLoggedIn = true, тоді redirect to redirectTo, інакше рендеримо Component
};

export default RestrictedRoute;
