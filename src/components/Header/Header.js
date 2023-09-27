import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Title,
  Wrapper,
  HeaderWrapper,
  LoginBtnsWrapper,
  LogoAndBtnsWrapper,
  StyledUserEmail,
} from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContactBtn/CreateContactBtn';
import { Link } from 'react-router-dom';
import { LoginBtn } from 'components/LoginBtn/LoginBtn';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';
import { useAuth } from 'hook';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleDarkTheme,
  handleLightTheme,
  selectTheme,
} from 'redux/userTheme/slice';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  const currentTheme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (currentTheme === 'light') {
      dispatch(handleDarkTheme());
    } else {
      dispatch(handleLightTheme());
    }
  };

  return (
    <HeaderWrapper>
      <LogoAndBtnsWrapper>
        <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
          <Wrapper>
            {isLoggedIn ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar
                  alt="Avatar"
                  src="https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"
                  sx={{ width: 50, height: 50 }}
                />
              </StyledBadge>
            ) : (
              <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
            )}

            <Title>Phonebook</Title>
          </Wrapper>
        </Link>
        <LoginBtnsWrapper className="LoginBtnsWrapper">
          {isLoggedIn ? (
            <>
              <StyledUserEmail>{user.email}</StyledUserEmail>
              <LogoutBtn />
            </>
          ) : (
            <LoginBtn />
          )}
        </LoginBtnsWrapper>
      </LogoAndBtnsWrapper>
      {isLoggedIn && (
        <>
          <Filter /> <CreateContact />
        </>
      )}

      <LoginBtnsWrapper className="LoginBtnsWrapperDesk">
        <button onClick={handleThemeChange}>C</button>
        {isLoggedIn ? (
          <>
            <StyledUserEmail>{user.email}</StyledUserEmail>
            <LogoutBtn />
          </>
        ) : (
          <LoginBtn />
        )}
      </LoginBtnsWrapper>
    </HeaderWrapper>
  );
};
