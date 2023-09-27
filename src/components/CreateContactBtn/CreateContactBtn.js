import {
  PaperStyled,
  StyledLink,
  BtnText,
  MobStyledLink,
  AddIcontStyled,
} from './CreateContactBtn.styled';

export const CreateContact = () => {
  return (
    <>
      <StyledLink to="/addContact" style={{ textDecoration: 'none' }}>
        <PaperStyled
          elevation={3}
          sx={{
            borderRadius: '25px',
            alignItems: 'center',
            display: 'flex',
            gap: '5px',
            backgroundColor: 'transparent',
          }}
        >
          <AddIcontStyled type="button" sx={{ ml: 'auto', mr: 'auto' }} />
          <BtnText>Create contact</BtnText>
        </PaperStyled>
      </StyledLink>

      <MobStyledLink to="/addContact" style={{ textDecoration: 'none' }}>
        <PaperStyled
          elevation={3}
          sx={{
            borderRadius: '50%',
            p: '12px',
            alignItems: 'center',
            width: '50px',
            display: 'flex',
            backgroundColor: 'transparent',
          }}
        >
          <AddIcontStyled type="button" sx={{ ml: 'auto', mr: 'auto' }} />
        </PaperStyled>
      </MobStyledLink>
    </>
  );
};
