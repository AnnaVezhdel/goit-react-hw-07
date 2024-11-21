import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "./redux/contactsSlice";
import { useSelector } from "react-redux";

const App = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      <ContactList />
    </div>
  );
};

export default App;
