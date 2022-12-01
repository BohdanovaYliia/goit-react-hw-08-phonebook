import styled from 'styled-components';

export const FilterLabel = styled.label`
    margin-left: 20px;
    font-weight: 700;
`;

export const FilterInput = styled.input`
    margin-left: 10px;
    border: 1px darkblue solid;
    &:focus {
        border: 2px darkblue solid;
        border-radius: 5px;
        outline: none;
        box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
    }
`;