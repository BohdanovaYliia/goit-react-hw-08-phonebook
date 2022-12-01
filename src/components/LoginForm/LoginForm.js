import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logIn } from 'redux/Auth/operations';
import { getLogInError } from 'redux/Auth/selectors';
import { updateErrorLogIn } from 'redux/Auth/authSlice';
import { FormLogin, FormInput, FormLabel, FormBtn, ErrorText, InputError } from 'components/LoginForm/LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().email('Not a proper email'),
  password: yup.string().min(6).required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getLogInError);

  useEffect(() => {
    dispatch(updateErrorLogIn(error));
    return () => {
      dispatch(updateErrorLogIn(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    if (error !== null) {
      resetForm();
    }
  };

    return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogin>
          <FormLabel>
            <FormInput type="email" name="email" placeholder="Enter your email" />
          Email</FormLabel>
          <InputError name="email" component="div" />

          <FormLabel>
            <FormInput type="password" name="password" placeholder="Enter your password" />
          Password</FormLabel>
          <InputError name="password" component="div" />

          <FormBtn type="submit">Log In</FormBtn>
        </FormLogin>
      </Formik>
      {error && (
        <ErrorText>
          An error occurred! Check your login and password or go to the register.
        </ErrorText>
      )}
    </>
  );
};