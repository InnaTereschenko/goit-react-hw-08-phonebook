import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import styles from './UserMenu.module.css';
import defaultAvatar from './defaultAvatar.png';
import { selectUser } from "redux/auth/authSelectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);
 const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="User" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );


};

export default UserMenu;