import { useSelector } from 'react-redux';
import {Navigation} from '../Navigation/Navigation.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import styles from './AppBar.module.css';
import {selectIsLoggedIn} from 'redux/auth/authSelectors.js';



 function AppBar() {
   
   const isLoggedIn = useSelector(selectIsLoggedIn); 
   
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;




