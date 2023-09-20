import { useDispatch } from 'react-redux';
import {logIn} from 'redux/auth/authOperations';
import styles from './LoginForm.module.css';
import { useState } from 'react';


export const LoginForm = () => {
  const dispatch = useDispatch();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!email || !password) {
      alert('Enter your login or password')
      return;
    }

      dispatch(logIn({ email, password }));

       setEmail('');
    setPassword('');
  };

  return (
        
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Please enter email"
          onChange={handleChange}

        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Please enter your password"
          onChange={handleChange}
        />
      </label>

      <button className={styles.formBtn} type="submit">
        Log In
      </button>
      
      </form>
      
      );
    
};

