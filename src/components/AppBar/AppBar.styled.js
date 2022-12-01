import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;

  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: darkblue;
  margin-right: 30px;

  &.active {
    color: blue;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;