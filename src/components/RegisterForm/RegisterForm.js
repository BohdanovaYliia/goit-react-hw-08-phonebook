import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from 'redux/Auth/operations';
import { getRegisterError } from 'redux/Auth/selectors';
import { updateErrorRegister } from 'redux/Auth/authSlice';
import { FormRegister, FormInput, FormLabel, FormBtn, ErrorText, InputError } from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Not a proper email'),
  password: yup.string().min(6).required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(getRegisterError);

  useEffect(() => {
    dispatch(updateErrorRegister(error));
    return () => {
      dispatch(updateErrorRegister(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));

    if (error !== null) {
      resetForm();
    }
  };
    return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormRegister>
          <FormLabel>
            <FormInput type="text" name="name" placeholder="Enter username"/>
          Username</FormLabel>
          <InputError name="name" component="div" />

          <FormLabel>
            <FormInput type="email" name="email" placeholder="Enter email"/>
          Email</FormLabel>
          <InputError name="email" component="div"/>

          <FormLabel>
            <FormInput type="password" name="password" placeholder="Enter password"/>
          Password</FormLabel>
          <InputError name="password" component="div" />

          <FormBtn type="submit">Register</FormBtn>
        </FormRegister>
      </Formik>
      {error && (
        <ErrorText>
          An error occurred! Check your data correctness and try again.
        </ErrorText>
      )}
    </>
  );
};
