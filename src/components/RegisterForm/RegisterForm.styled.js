import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegister = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width:380px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;

    border: 1px black solid;
`;

export const FormInput = styled(Field)`
  margin-top: 10px;
  border: 1px darkblue solid;
    &:focus {
        border: 2px darkblue solid;
        border-radius: 5px;
        outline: none;
        box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
        background-color: transparent;
    }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column-reverse;
  font-weight: 500;
`;

export const FormBtn = styled.button`
  padding: 5px 15px;
    width: 150px;
    cursor: pointer;
    
    border: none;
    border-radius: 5px;
    font-weight: 500;
    color: darkblue;
    background-color: skyblue;
    &:hover, &:focus {
        background-color: lightblue;
        box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
    }
    transition: background-color 300ms linear, box-shadow 300ms linear;
`;

export const ErrorText = styled.div`
  text-align: center;
  color: red;
  margin-top: 15px;
  font-weight: 700;
  font-size: 16px;
`;

export const InputError = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 12px;
`;