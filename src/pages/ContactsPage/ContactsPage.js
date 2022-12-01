import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import { getLoading, getError, getAllContacts } from 'redux/Contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'pages/ContactsPage/ContactsPage.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}
      {isLoading && !error && <Loader />}
      <ContactList />

      {error && <p> {error} </p>}
    </Container>
  );
}