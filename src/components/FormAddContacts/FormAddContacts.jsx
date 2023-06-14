import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FormAdd, Label, Input, Button } from './Form.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'components/redux/contactsSlice';
import { nanoid } from 'nanoid';

export const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { name, number } = data;

    const isNameExists = contacts.some((con) => {
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
reset()
    dispatch(addContact(contact));
  };

  return (
    <FormAdd onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          {...register('name')}
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          {...register('number')}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormAdd>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
