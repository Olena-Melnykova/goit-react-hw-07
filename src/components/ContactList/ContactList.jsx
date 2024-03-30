import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled';
import { selectNameFilter } from '../../redux/filtersSlice';

function ContactList() {
  const selectedContacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const contacts = selectedContacts.filter((contact) =>
    typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      {contacts.map(( { id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
        })}
    </StyledContactList>
  );
}

export default ContactList;




































// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import Contact from '../Contact/Contact';
// import { StyledContactList } from './ContactList.styled';
// import { selectNameFilter } from '../../redux/filtersSlice';
// import { ContactName } from '../Contact/Contact.styled';

// function ContactList() {
//   const selectedContacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);

//   const contacts = selectedContacts.filter((contact ) => {
//     const name = typeof contact.name === "string" ? contact.name.toLowerCase() : "";
//     return name.includes(filter.toLowerCase());
//   });

//   return (
//     <StyledContactList>
//       {contacts.map(({contact}) => (
//         <ContactName key={contact.id} id={contact} />
//       ))}
//     </StyledContactList>
//   );
// }

// export default ContactList;



// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import Contact from '../Contact/Contact'; // Исправлен импорт
// import { StyledContactList } from './ContactList.styled';
// import { selectNameFilter } from '../../redux/filtersSlice';

// function ContactList() {
//   const selectedContacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);

//   const contacts = selectedContacts.filter((contact) => {
//     const name = typeof contact.name === "string" ? contact.name.toLowerCase() : "";
//     return name.includes(filter.toLowerCase());
//   });

//   return (
//     <StyledContactList>
//       {contacts.map(({ id, name, number }) => ( // Исправлена деструктуризация
//         // Используем компонент Contact для рендеринга каждого контакта
//         <Contact key={id} id={id} name={name} number={number} />
//       ))}
//     </StyledContactList>
//   );
// }

// export default ContactList;












// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import Contact from '../Contact/Contact';
// import { StyledContactList } from './ContactList.styled';
// import { selectNameFilter } from '../../redux/filtersSlice';

// function ContactList() {
//   const selectedContacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);

//   const contacts = selectedContacts.filter((contact) => {
//     const name = typeof contact.name === "string" ? contact.name.toLowerCase() : "";
//     return name.includes(filter.toLowerCase());
//   });

//   return (
//     <StyledContactList>
//       {contacts.map(({ id, name, number }) => (
//         <Contact key={id} id={id} name={name} number={number} />
//       ))}
//     </StyledContactList>
//   );
// }

// export default ContactList;







