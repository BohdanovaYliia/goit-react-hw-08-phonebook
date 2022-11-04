import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contactsSlice";
import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { Contacts } from './ContactList.styled';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
    
    const filteredContacts = getFilteredContacts();
    
    return (
            <Contacts>
                {filteredContacts.map((contact) => {
                    const { name, number, id } = contact;
                    return <ContactListEl name={name} number={number} id={id} key={id} />;
                })}
            </Contacts>
    );
};
