import React  from "react";
import { Form } from "./FormAddContacts/FormAddContacts";
import { nanoid } from 'nanoid';
import { ContactList } from "./Contacts/Contacts";
import { Search } from "./Search/Search";
import { Container, Title, ListTitle } from './Container/Container.Styled'
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContacts, removeContact } from "./redux/contactsSlice";
import { filter, getFilter } from "./redux/filterSlice";

export function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const handleFormSubmit = (name, number) => {
    const isNameExists = contacts.some(con => {
      if (typeof con.name !== 'string') {
        return false;
      }
      return con.name.toLowerCase() === name.toLowerCase();
    });
  
    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }
  
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
  };
  const handleDeleteContact = (id) => {
    return dispatch(removeContact(id));
  };



console.log(contacts)

const getFilteredContacts = () => {
  const normalizedFilter = contactsFilter.toLowerCase();
  return contacts.filter(contact =>
    typeof contact.name === 'string' &&
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

  const handleFilterChange  = e => {
    dispatch(filter(e.target.value));
  };
  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form addContactList={handleFormSubmit}/>
      <ListTitle>Contacts</ListTitle>
      <Search filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </Container>
  );
}