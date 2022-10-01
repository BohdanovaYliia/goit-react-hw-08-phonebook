import styled from 'styled-components';


export const ContactElement = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 5px 10px;
    margin-top: 10px;

    border: 1px darkblue solid;
`;

export const ContactText = styled.p`

`;

export const ContactBtn = styled.button`
    padding: 5px 15px;
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

export const ContactName = styled.span`
    font-weight: 500;
`;