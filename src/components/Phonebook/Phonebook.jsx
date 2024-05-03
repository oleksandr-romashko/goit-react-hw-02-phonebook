import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Wrapper, Title, Subtitle } from './Phonebook.styled';

import textToNormalizedWordsArray from 'components/helpers/textToNormalizedWordsArray';

/**
 * Phonebook to add and manage contacts.
 */
class Phonebook extends Component {
  #defaultState = {
    contacts: [],
    filter: '',
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
  handleTextChange = ({ name, value }) => {
    this.setState({ [name]: value });
  }

  /**
   * Filters contacts based on filter value.
   * @returns {object[]} Array of filtered contacts.
   */
  filterContacts = () => {
    if (this.state.contacts.length === 0) {
      return [];
    }
    const normalizedFilterArr = textToNormalizedWordsArray(this.state.filter);
    return this.state.contacts.filter(({ name, number }) => {
      const normalizedContact = textToNormalizedWordsArray(`${name}${number}`).join("");
      return normalizedFilterArr.some(filterEl => (!filterEl.isEmpty && normalizedContact.includes(filterEl)));;
    });
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
          nameText={this.state.name}
          numberText={this.state.number}
          onInputChange={this.handleTextChange}
          onSubmit={this.addContact}
        />
        <Subtitle>Contacts</Subtitle>
        <Filter
          filterText={this.state.filter}
          onInputChange={this.handleTextChange} />
        <ContactList
          contacts={this.filterContacts()}
           />
      </Wrapper>
    );
  }

}

export default Phonebook;
