import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import { Button } from 'components/Button/Button.styled';
import Input from 'components/Input/Input.styled';
import { Form, Label } from './ContactForm.styled';

/**
 * Patterns to check input text for.
 */
const CONTACT_NAME_PATTERN_REGEX =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const PHONE_NUMBER_PATTERN_REGEX =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';

/**
 * Form to add new contact.
 * @param {string} props.nameText Contact name.
 * @param {string} props.numberText Contact number.
 * @param {callback} props.onInputChange Callback to handle input value change.
 * @param {callback} props.onSubmit Callback to handle form submit.
 * @returns {React.Component} Form component.
 */
const ContactForm = ({ nameText, numberText, onInputChange, onSubmit }) => {
  /**
   * Handles form submition.
   * Terminates if requested regex pattern does not match to input value.
   * Calls provided props callback that handles add of a new contact.
   * @param {React.SyntheticEvent} event React crossbrowser SyntheticEvent that wraps the native Event.
   */
  const handleSubmit = event => {
    event.preventDefault();

    // Additional pattern checks in JS
    // ! Evaluate logging data when if saving to a log file for potential debugging
    const name = event.target.name.value;
    const number = event.target.number.value;
    if (!name.match(CONTACT_NAME_PATTERN_REGEX)) {
      console.error(`Name '${name}' does not match allowed pattern.`);
      return;
    }
    if (!number.match(PHONE_NUMBER_PATTERN_REGEX)) {
      console.error(`Number '${number}' does not match allowed pattern.`);
      return;
    }

    onSubmit(name, number);
  };

  /**
   * Handles input change.
   * Calls provided props callback that handles input change.
   * @param {string} event.target.name Name of the element.
   * @param {string} event.target.value Element value.
   */
  const handleChange = ({ target: { name, value } }) => {
    onInputChange({ name, value });
  };

  return (
    <Form onSubmit={handleSubmit} aria-label="Add contact form">
      <Label aria-label="Contact name">
        Name
        <Input
          onChange={throttle(handleChange, 200, { trailing: false })}
          value={nameText}
          type="text"
          name="name"
          pattern={CONTACT_NAME_PATTERN_REGEX}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
      </Label>
      <Label aria-label="Contact phone number">
        Phone number
        <Input
          onChange={throttle(handleChange, 200, { trailing: false })}
          value={numberText}
          type="tel"
          name="number"
          pattern={PHONE_NUMBER_PATTERN_REGEX}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" aria-label="Add contact">
        Add contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  nameText: PropTypes.string,
  numberText: PropTypes.string,
  onAddContact: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default ContactForm;
