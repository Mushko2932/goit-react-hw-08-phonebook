import { useSelector } from 'react-redux';
import {
  selectContactsFilter,
  selectContactsList,
} from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactRoster } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <ContactRoster>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactRoster>
  );
};
