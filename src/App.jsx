import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectLoading } from "./redux/contactsSlice.js";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from './components/Form/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { AppStyled, Title, SearchBoxWrapper } from './App.styled.jsx';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()).unwrap().catch((error) => {
      toast.error("Sorry, we couldn't access your contact list.");
      console.error(error);
    });
  }, [dispatch]);

  return (
    <AppStyled>
      <Title>Contact Book</Title>
      <ContactForm />
      <SearchBoxWrapper>
        <SearchBox />
      </SearchBoxWrapper>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again later.</p>}
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} />
    </AppStyled>
  );
}

export default App;