import { useAddContactMutation, useGetContactsQuery } from "redux/contactsApi";
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';
import Notiflix from 'notiflix';

export const ContactForm= () => {
    const [addContact, {isLoading}] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();
    const initialValues = {
        name: '',
        number: '',
    };
    const nameId = nanoid();
    const numberId = nanoid();

    const handleSubmit = async evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const normalizedName = name.toLowerCase();
        const checkDoubling = contacts.map(contact => contact.name.toLowerCase()).includes(normalizedName);
        if (checkDoubling) {
            return Notiflix.Notify.warning(`${name} is already in your contacts!`);
        };
        
        const newId = nanoid();
        const newContact = {
        id: newId,
        name,
        phone: number,
        };

        form.reset();

        try {
            const response = await addContact(newContact);
            if (response) {
                return Notiflix.Notify.success(`${name} added to your contacts!`);
            };
        }
        catch (error) {
            console.log('ERROR');
        }
    };

    return (
        <Form initialValues={initialValues} onSubmit={handleSubmit}>
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
            <FormBtn type='submit' disabled={isLoading}>Add contact</FormBtn>
        </Form>
    );
};