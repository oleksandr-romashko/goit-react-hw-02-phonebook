import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Wrapper, Title, Subtitle } from './Phonebook.styled';

/**
 * Phonebook to add and manage contacts.
 */
class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  /**
   * Adds contacts to the list of contacts.
   * @param {string} name Name of the contact. 
   */
  addContact = (name) => {
    const id = nanoid();
    this.setState(prevState => prevState.contacts.push({ id, name }));
  }

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
          inputNameValue={this.state.name}
          onAddContact={this.addContact}
          onNameChange={this.changeInputName}
        />
        <Subtitle>Contacts</Subtitle>
        <ContactList contacts={this.state.contacts} />
      </Wrapper>
    );
  }
}

export default Phonebook;
