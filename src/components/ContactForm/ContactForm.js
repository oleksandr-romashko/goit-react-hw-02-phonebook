import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import { Button } from 'components/Button/Button.styled';
import { Input } from 'components/Input/Input.styled';
import { Form, Label } from './ContactForm.styled';

/**
 * Patterns to check input text for.
 */
const NAME_PATTERN_REGEX =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

/**
 * Form to add new contact.
 * @param {string} props.inputNameValue Name of the contact.
 * @param {callback} props.onAddContact Callback to handle add of a new contact.
 * @param {callback} props.onNameChange Callback to handle name input change.
 * @returns {React.Component} Form component.
 */
export const ContactForm = ({ inputNameValue, onSubmit, onNameChange }) => {
  /**
   * Handles form submition.
   * Terminates if requested regex pattern does not match to input value.
   * Calls provided props callback that handles add of a new contact.
   * @param {React.SyntheticEvent} event React crossbrowser SyntheticEvent that wraps the native Event.
   */
  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    // Additional pattern check in JS
    if (!name.match(NAME_PATTERN_REGEX)) {
      return;
    }

    onSubmit(name);
  };

  /**
   * Handles input change.
   * Calls provided props callback that handles input change.
   * @param {string} event.target.name Name of the element.
   * @param {string} event.target.value Element value.
   */
  const handleChange = ({ target: { name, value } }) => {
    onNameChange({ name, value });
  };

  return (
    <Form onSubmit={handleSubmit} aria-label="Add contact form">
      <Label aria-label="Name text">
        Name
        <Input
          onChange={throttle(handleChange, 200, { trailing: false })}
          type="text"
          value={inputNameValue}
          name="name"
          pattern={NAME_PATTERN_REGEX}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
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
  inputNameValue: PropTypes.string,
  onAddContact: PropTypes.func,
  onNameChange: PropTypes.func,
};
