import { useDeleteContactMutation } from "redux/contactsApi";
import PropTypes from 'prop-types';
import { ContactElement, ContactText, ContactBtn, ContactName } from './ContactListEl.styled';
import Notiflix from 'notiflix';

export const ContactListEl = ({ id, name, number }) => {
    const [deleteContact, { isLoading, isSuccess, data }] = useDeleteContactMutation();
    
    if (isSuccess) {
        return Notiflix.Notify.info(`${data.name} deleted from contacts.`);
    };
    
    return (
        <ContactElement> <ContactText> <ContactName>{name}:</ContactName> {number}</ContactText>
            <ContactBtn onClick={() => deleteContact(id)} disabled={isLoading}>Delete</ContactBtn> 
        </ContactElement>
    );
};

ContactListEl.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};