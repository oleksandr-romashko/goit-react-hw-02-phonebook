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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  state = {
    ...this.#defaultState,
  };

  /**
   * Adds contact to the list of contacts.
   * @param {string} name Name of the contact.
   * @param {string} number Phone number of the contact. 
   */
  addContact = (name, number) => {
    const isExist = this.state.contacts.some(({ name: existingName }) =>
      existingName.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const id = nanoid();
    const contact = { id, name, number };
    this.setState(prevState => (
      {
        contacts: [contact, ...prevState.contacts],
      }
    ))
  };

  /**
   * Handles change of the text input.
   * @param {string} props.name Name of the element.
   * @param {string} props.value Text value of the element.
   */
  handleFilterTextChange = ({ name, value }) => {
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
   * Removes contact from the list of contacts.
   * @param {string} name Name of the contact.
   * @param {string} number Phone number of the contact. 
   */
  deleteContactById = (id) => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id)});
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
          onSubmit={this.addContact}
        />
        <Subtitle>Contacts</Subtitle>
        <Filter
          filterText={this.state.filter}
          onFilterInputChange={this.handleFilterTextChange} />
        <ContactList
          contacts={this.filterContacts()}
          onContactDelete={this.deleteContactById}
           />
      </Wrapper>
    );
  }

}

export default Phonebook;
