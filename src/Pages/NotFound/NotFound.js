import {
  Container,
  Text,
  List,
  ListItem,
  StyledLink,
  Wrapper,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <Container className="page-404">
        <Wrapper>
          <List className="page-404__redirect-list redirect-list">
            <ListItem className="redirect-list__item">
              <StyledLink to="/" className="redirect-list__link">
                Home
              </StyledLink>
            </ListItem>
          </List>

          <Text className="page-404__text">
            404
            <span>Page not Found</span>
          </Text>
        </Wrapper>
      </Container>
    </main>
  );
};

export default NotFound;
