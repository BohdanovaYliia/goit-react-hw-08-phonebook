import { useSelector } from "react-redux";
import { useGetContactsQuery } from "redux/contactsApi";
import { getFilter } from "redux/filterSlice";
import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
    const {data, isFetching, error} = useGetContactsQuery();
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return data?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
    
    const filteredContacts = getFilteredContacts();
    const isAnyContacts = filteredContacts?.length > 0;
    const isNoMatches = filteredContacts?.length === 0;
    
    return (
    <>
    {isFetching && (<p>Loading, please wait...</p>)}
    {error && (<p>Sorry, there is an error. Please reload the page.</p>)}
    {isAnyContacts &&
        <Contacts>
            { filteredContacts.map( contact => { 
            const { id, name, phone } = contact;
            return <ContactListEl  name={name} number={phone} key={id} id={id}/>;})
            }
        </Contacts>}
    {isNoMatches && <p>You dont have any contacts or matches!</p>}
    </>
    );
};
