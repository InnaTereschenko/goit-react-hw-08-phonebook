import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import {deleteContact} from 'redux/contacts/operetions';
import { useDispatch } from 'react-redux'



const ContactListItem = ({ id, name, phone }) => {

const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  
  return (
    <li className={css.contactItem}>
      <span className={css.contactTxt}>{name}</span> :{' '}
      <span className={css.contactTxt}>{phone}</span>
           <button onClick={handleDelete} type="button" className={css.deleteBtn}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  
};

export default ContactListItem;
