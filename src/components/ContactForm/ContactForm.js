import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import Input from 'components/Input/Input.styled';
import Button from 'components/Button/Button.styled';

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
 * @param {callback} props.onSubmit Callback to handle form submit.
 * @returns {React.Component} Form component.
 */
class ContactForm extends React.Component {
  #defaultState = {
    name: '',
    number: '',
  };

  state = {
    ...this.#defaultState,
  };

  /**
   * Handles form submition.
   * Terminates if requested regex pattern does not match to input value.
   * Calls provided props callback that handles add of a new contact.
   * @param {React.SyntheticEvent} event React crossbrowser SyntheticEvent that wraps the native Event.
   */
  handleSubmit = event => {
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

    this.props.onSubmit(name, number);

    this.setState({
      name: this.#defaultState.name,
      number: this.#defaultState.number,
    });
  };

  /**
   * Handles input change.
   * Calls a function to handle input change.
   * @param {string} event.target.name Name of the element.
   * @param {string} event.target.value Element value.
   */
  handleInputTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} aria-label="Add contact form">
        <Label aria-label="Contact name">
          Name
          <Input
            onChange={throttle(this.handleInputTextChange, 200, {
              trailing: false,
            })}
            value={this.state.name}
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
            onChange={throttle(this.handleInputTextChange, 200, {
              trailing: false,
            })}
            value={this.state.number}
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
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
