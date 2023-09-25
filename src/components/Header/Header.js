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

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
        <Wrapper>
          <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
          <Title>Phonebook</Title>
        </Wrapper>
      </Link>
      <Filter />
      <CreateContact />
      <LoginBtnsWrapper>
        <LoginBtn />
        <LogoutBtn />
      </LoginBtnsWrapper>
    </HeaderWrapper>
  );
};
