
import { ContactsList, ContactItem } from './Contacts.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'components/redux/filterSlice';
import { getContacts, removeContact } from 'components/redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = contactsFilter.toLowerCase();
    return contacts.filter(
      (contact) =>
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = (id) => {
    return dispatch(removeContact(id));
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}{' '}
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

