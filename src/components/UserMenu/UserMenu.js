import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuWrap, UserMenuTitle, UserName, LogOutBtn } from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <UserMenuTitle>
        Welcome, <UserName>{user.name}!</UserName>
      </UserMenuTitle>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </UserMenuWrap>
  );
};