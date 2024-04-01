import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled';

function ContactList() {

  const contacts = useSelector(selectFilteredContacts);

  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </StyledContactList>
  );
}

export default ContactList;

















