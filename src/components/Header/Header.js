import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Title,
  Wrapper,
  HeaderWrapper,
  LoginBtnsWrapper,
  LogoAndBtnsWrapper,
} from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContactBtn/CreateContactBtn';
import { Link } from 'react-router-dom';
import { LoginBtn } from 'components/LoginBtn/LoginBtn';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';
import { useAuth } from 'hook';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderWrapper>
      <LogoAndBtnsWrapper>
        <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
          <Wrapper>
            <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
            <Title>Phonebook</Title>
          </Wrapper>
        </Link>
        <LoginBtnsWrapper className="LoginBtnsWrapper">
          {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
        </LoginBtnsWrapper>
      </LogoAndBtnsWrapper>
      {isLoggedIn && (
        <>
          <Filter /> <CreateContact />
        </>
      )}

      <LoginBtnsWrapper className="LoginBtnsWrapperDesk">
        {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
      </LoginBtnsWrapper>
    </HeaderWrapper>
  );
};
