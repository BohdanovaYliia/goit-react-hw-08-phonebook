import PropTypes from 'prop-types';
import { ContactElement, ContactText, ContactBtn, ContactName } from './ContactListEl.styled';

export const ContactListEl = ({ id, name, number, onDeleteContact }) => {
    
    return (
        <ContactElement> <ContactText> <ContactName>{name}:</ContactName> {number}</ContactText>
            <ContactBtn onClick={() => onDeleteContact(id)}>Delete</ContactBtn> 
        </ContactElement>
    );
};

ContactListEl.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};