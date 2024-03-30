import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js'
import { Button, ContactContainer, ContactName } from './Contact.styled.jsx';

function Contact({ id, name, number }) { 
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName>{name}: {number}</ContactName> 
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ContactContainer>
  );
}

export default Contact;


