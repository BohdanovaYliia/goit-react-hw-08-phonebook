import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrap, Title, SecondaryTitle } from './App.styled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContactData => {
    const { contacts } = this.state;
    const normalizedName = newContactData.name.toLowerCase();
    const checkDoubling = contacts.map(contact => contact.name.toLowerCase()).includes(normalizedName);
    if (checkDoubling) {
      alert(`${newContactData.name} is already in your contacts`)
      return
    }

    const newId = nanoid();
    const newContact = {
      id: newId,
      ...newContactData,
    };

      this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    })
    );
  }

  filterChange = evt => {  
        this.setState({ filter: evt.currentTarget.value });
  }
  
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;

    return (
      <Wrap>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter value={filter} filterChange={this.filterChange} />
        <ContactList contacts={this.getFilteredContacts()} onDeleteContact={this.deleteContact} />
      </Wrap>
    );
  }
};
