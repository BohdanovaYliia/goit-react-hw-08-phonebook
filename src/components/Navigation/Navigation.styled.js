import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin-right: auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: darkblue;
  margin-left: 30px;
  &.active {
    color: blue;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;