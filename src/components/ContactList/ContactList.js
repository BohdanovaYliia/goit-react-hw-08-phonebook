import PropTypes from 'prop-types';
import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { Contacts } from './ContactList.styled';


export const ContactList = ( { contacts, onDeleteContact } ) => {
    
    return (
        <Contacts>
           {contacts.map((contact) =>
               <ContactListEl name={contact.name} number={contact.number} id={contact.id} key={contact.id} onDeleteContact={onDeleteContact}/>
                )} 
        </Contacts>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};