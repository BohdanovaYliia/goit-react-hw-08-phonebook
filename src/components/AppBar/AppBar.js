import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Header, StyledNavLink } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
          {isLoggedIn ? <UserMenu /> :
    <div>
      <StyledNavLink to="/login">Log In</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </div>}
          
    </Header>
  );
};