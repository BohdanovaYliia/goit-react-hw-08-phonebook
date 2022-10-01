import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 380px;
    margin-left: 20px;
    padding: 10px;

    border: 1px black solid;
`;

export const FormLabel = styled.label`
    font-weight: 500;
`;

export const FormInput = styled.input`
    border: 1px darkblue solid;
    &:focus {
        border: 2px darkblue solid;
        border-radius: 5px;
        outline: none;
        box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
        background-color: transparent;
    }
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