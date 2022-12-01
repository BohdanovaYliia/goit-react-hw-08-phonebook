import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { getAllContacts } from 'redux/Contacts/selectors';
import { FormContact, FormInput, FormLabel, FormBtn, InputError } from 'components/ContactForm/ContactForm.styled';
import Notiflix from 'notiflix';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .min(4)
    .max(10)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
        name: '',
        number: '',
    };

export const ContactForm= () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getAllContacts);

    const handleSubmit = (values, { resetForm }) => {
        const normalizedName = values.name.toLowerCase();
        const checkDoubling = contacts.map(contact => contact.name.toLowerCase()).includes(normalizedName);

        if (checkDoubling) {
        Notiflix.Notify.warning(`${values.name} is already in your contacts!`);
        } else {
        dispatch(addContact(values));

        resetForm();
        }
    };
  
    return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContact autoComplete="off">
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" name="name" placeholder="Enter contact name" />
        <InputError name="name" component="div" />

        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput type="tel" name="number" placeholder="Enter contact number" />
        <InputError name="number" component="div" />
          
        <FormBtn type="submit">Add contact</FormBtn>
      </FormContact>
    </Formik>
  );
};