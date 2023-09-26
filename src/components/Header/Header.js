import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Title,
  Wrapper,
  HeaderWrapper,
  LoginBtnsWrapper,
} from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContact/CreateContactBtn';
import { Link } from 'react-router-dom';
import { LoginBtn } from 'components/LoginBtn/LoginBtn';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';
import { useAuth } from 'hook';
// import { useSelector } from 'react-redux';
// import { selectEmail } from 'redux/auth/selectors';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  // const userName = useSelector(selectEmail);
  // console.log(userName);
  return (
    <HeaderWrapper>
      <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
        <Wrapper>
          <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
          <Title>Phonebook</Title>
        </Wrapper>
      </Link>
      {isLoggedIn && (
        <>
          <Filter /> <CreateContact />
        </>
      )}

      <LoginBtnsWrapper>
        {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
      </LoginBtnsWrapper>
    </HeaderWrapper>
  );
};
