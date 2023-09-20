import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink
        to="/register"
        className={styles.link}
        // сlassName={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        // exact
        className={styles.link}
        // сlassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
