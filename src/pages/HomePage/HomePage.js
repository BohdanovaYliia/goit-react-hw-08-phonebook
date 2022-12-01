import { HomeInfo, HomeTitle, HomeText } from 'pages/HomePage/HomePage.styled';
import { useAuth } from 'hooks/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <HomeInfo>
      <HomeTitle>Welcome to Phonebook!</HomeTitle>
      {!isLoggedIn && (
        <HomeText>You can register or log in.</HomeText>
      )}
    </HomeInfo>
  );
}