import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/Contacts/operations';
import PropTypes from 'prop-types';
import { ContactElement, ContactText, ContactBtn, ContactName } from './ContactListEl.styled';

export const ContactListEl = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const deleteCard = contactId => {
    dispatch(deleteContact(contactId));
    };
    
    return (
        <ContactElement> <ContactText> <ContactName>{name}:</ContactName> {number}</ContactText>
            <ContactBtn onClick={() => deleteCard(id)}>Delete</ContactBtn> 
        </ContactElement>
    );
};

ContactListEl.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};