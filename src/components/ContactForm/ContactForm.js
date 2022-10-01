import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn  } from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameId = nanoid();
    numberId = nanoid();

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.addContact(this.state);

        this.resetForm();
    };

    handleChange = evt => { 
        const { name, value } = evt.currentTarget;
        
        this.setState({ [name]: value });
    };

    resetForm = () => {
        this.setState({
        name: '',
        number: '',
    });
     };

    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <FormLabel htmlFor={this.nameId}> Name </FormLabel>
                <FormInput
                    type="text"
                    name='name'
                    id={this.nameId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange} />
            <FormLabel htmlFor={this.numberId}> Number </FormLabel>
                <FormInput
                    type="tel"
                    name='number'
                    id={this.numberId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange} />
            <FormBtn type='submit'>Add contact</FormBtn>
        </Form>
        );
    }
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};