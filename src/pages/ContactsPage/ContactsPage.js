import { ContactForm } from '../../components/ContactForm/ContactForm.jsx';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter.jsx';
import { useEffect } from 'react';
import { selectContacts } from '../../redux/contacts/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operetions';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <Filter />

          <ContactList />
        </>
      )}
    </div>
  );
}