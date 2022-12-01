import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMenuTitle = styled.div`
  display: flex;
  text-decoration: none;
  font-size: 20px;
  color: blue;
  margin-right: 20px;
`;

export const UserName = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  color: blue;
`;

export const LogOutBtn = styled.button`
  padding: 5px 15px;
  margin-right: 30px;
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