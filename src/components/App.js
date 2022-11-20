import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrap, Title, SecondaryTitle } from './App.styled';

export function App() {

  return (
    <Wrap>
      <Title>Phonebook</Title>
      <ContactForm/>
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter/>
      <ContactList/>
    </Wrap>
  );
};
