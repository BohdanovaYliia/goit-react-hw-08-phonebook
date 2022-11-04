import { useDispatch, useSelector } from "react-redux";
import { addContact, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormBtn  } from './ContactForm.styled';

export function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const nameId = nanoid();
    const numberId = nanoid();

    const handleSubmit = evt => {
        evt.preventDefault();
        
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const normalizedName = name.toLowerCase();
        const checkDoubling = contacts.map(contact => contact.name.toLowerCase()).includes(normalizedName);
        if (checkDoubling) {
            alert(`${name} is already in your contacts`);
            return;
        }

        const newId = nanoid();
        const newContact = {
            id: newId,
            name,
            number,
        };
        dispatch(addContact(newContact));
        form.reset();
    };

    // const handleChange = evt => { 
    //     const { name, value } = evt.currentTarget;

    //     switch (name) {
    //         case 'name':
    //             setName(value);
    //             break;
            
    //         case 'number':
    //             setNumber(value);
    //             break;
            
    //         default:
    //             return;
    //     };
    // };


    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor={nameId}> Name </FormLabel>
            <FormInput
                type="text"
                name='name'
                id={nameId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <FormLabel htmlFor={numberId}> Number </FormLabel>
            <FormInput
                type="tel"
                name='number'
                id={numberId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
             />
            <FormBtn type='submit'>Add contact</FormBtn>
        </Form>
    );
};