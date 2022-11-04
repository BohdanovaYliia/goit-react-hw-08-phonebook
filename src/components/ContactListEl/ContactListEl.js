import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import PropTypes from 'prop-types';
import { ContactElement, ContactText, ContactBtn, ContactName } from './ContactListEl.styled';

export const ContactListEl = ({ id, name, number }) => {
    const dispatch = useDispatch();
    
    return (
        <ContactElement> <ContactText> <ContactName>{name}:</ContactName> {number}</ContactText>
            <ContactBtn onClick={() => dispatch(deleteContact(id))}>Delete</ContactBtn> 
        </ContactElement>
    );
};

ContactListEl.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};