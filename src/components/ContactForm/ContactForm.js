import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn  } from './ContactForm.styled';

export function ContactForm({ addContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = nanoid();
    const numberId = nanoid();

    const handleSubmit = evt => {
        evt.preventDefault();

        addContact(name, number);

        resetForm();
    };

    const handleChange = evt => { 
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        };
    };

    const resetForm = () => {
        setName('');
        setNumber('');
     };

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
                    value={name}
                    onChange={handleChange} />
            <FormLabel htmlFor={numberId}> Number </FormLabel>
                <FormInput
                    type="tel"
                    name='number'
                    id={numberId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange} />
            <FormBtn type='submit'>Add contact</FormBtn>
        </Form>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};