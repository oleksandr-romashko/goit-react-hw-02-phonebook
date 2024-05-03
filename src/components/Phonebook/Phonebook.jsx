import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Wrapper, Title, Subtitle } from './Phonebook.styled';

/**
 * Phonebook to add and manage contacts.
 */
class Phonebook extends Component {
  #defaultState = {
    contacts: [],
    name: '',
    number: '',
  }

  state = {
    ...this.#defaultState,
  };

  /**
   * Adds contacts to the list of contacts.
   * @param {string} name Name of the contact. 
   */
  addContact = (name, number) => {
    const id = nanoid();
    const contact = { id, name, number };
    this.setState(prevState => (
      {
        contacts: [contact, ...prevState.contacts],
        name: this.#defaultState.name,
        number: this.#defaultState.number
      }
    ))
  };

  /**
   * Handles change of the text input.
   * @param {string} props.name Name of the element.
   * @param {string} props.value Text value of the element.
   */
  changeInputName = ({ name, value }) => {
    this.setState({ [name]: value });
  }

  /**
   * Renders phonebook content
   * @returns {React.Component}
   */
  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm
          inputName={this.state.name}
          inputNumber={this.state.number}
          onSubmit={this.addContact}
          onNameChange={this.changeInputName}
        />
        <Subtitle>Contacts</Subtitle>
        <ContactList contacts={this.state.contacts} />
      </Wrapper>
    );
  }
}

export default Phonebook;
