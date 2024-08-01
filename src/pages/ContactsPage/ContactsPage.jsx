import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length !== 0 && <ContactList />}
      {loading && <Loader />}
    </div>
  );
}
