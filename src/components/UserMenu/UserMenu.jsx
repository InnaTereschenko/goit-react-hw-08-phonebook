import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import styles from './UserMenu.module.css';
import defaultAvatar from './defaultAvatar.png';
import { useAuth } from "components/hooks";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
    
 const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="User" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome,{user.name}</span>
      <button type="button" className={styles.btnLogOut} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );


};

export default UserMenu;