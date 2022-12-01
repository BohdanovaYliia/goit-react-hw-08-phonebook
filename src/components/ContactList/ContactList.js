import { useSelector } from "react-redux";
import { getAllContacts, getFilter } from 'redux/Contacts/selectors';
import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
    const data = useSelector(getAllContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
    
    const filteredContacts = getFilteredContacts();
    const isAnyContacts = filteredContacts?.length > 0;
    const isNoMatches = filteredContacts?.length === 0;
    
    return (
    <>
    {isAnyContacts &&
        <Contacts>
            { filteredContacts.map( contact => { 
                const { id, name, number } = contact;
            return <ContactListEl  name={name} number={number} key={id} id={id}/>;})
            }
        </Contacts>}
    {isNoMatches && <p>You dont have any contacts or matches!</p>}
    </>
    );
};
