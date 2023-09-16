import { NavLink } from 'react-router-dom';
import {useSelector}  from 'react-redux'
import styles from './Navigation.module.css';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="nav">
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// import { NavLink, Outlet } from 'react-router-dom';
// import Header from 'components/Header/Header';

// const Layout = () => {
//   return (
//     <>
//       <Header>
//         <Navigation>
//           <StyledLink to="/">Home</StyledLink>

//           <StyledLink to="/movies">Movies</StyledLink>
//         </Navigation>
//       </Header>
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };
