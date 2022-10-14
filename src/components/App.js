import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrap, Title, SecondaryTitle } from './App.styled';


export function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const checkDoubling = contacts.map(contact => contact.name.toLowerCase()).includes(normalizedName);
    if (checkDoubling) {
      alert(`${name} is already in your contacts`)
      return
    }

    const newId = nanoid();
    const newContact = {
      id: newId,
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  }

  const filterChange = evt => { 
    const { value } = evt.currentTarget;
    setFilter(value);
  }
  
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrap>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter value={filter} filterChange={filterChange} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
    </Wrap>
  );
};
