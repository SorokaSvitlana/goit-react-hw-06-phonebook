import React  from "react";
import { Form } from "./FormAddContacts/FormAddContacts";
import { ContactList } from "./Contacts/Contacts";
import { Search } from "./Search/Search";
import { Container, Title, ListTitle } from './Container/Container.Styled'

export function App() {

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <ListTitle>Contacts</ListTitle>
      <Search />
      <ContactList  />
    </Container>
  );
}