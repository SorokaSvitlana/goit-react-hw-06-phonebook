import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FormAdd, Label, Input, Button } from './Form.Styled';

export const Form = ({ addContactList }) => {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    addContactList(data.name, data.number);
    
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
  handleSubmit: PropTypes.func.isRequired,
};
