import { ContactList } from 'components/ContactsList/ContactsList';
import { PrivateRoute } from 'components/PrivateRoute.js/PrivateRoute';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <ContactList stateItem={{ from: location }} />
    </>
  );
};

export default Home;
