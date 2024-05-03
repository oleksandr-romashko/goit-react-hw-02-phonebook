import PropTypes from 'prop-types';

import React from 'react';
import { List } from './ContactList.styled';

/**
 * Render the list of contacts.
 * Displays default message when no no contacts.
 * @param {object[]} [props.contacts] Contacts array.
 * @returns {React.Component} List of contacts or default message.
 */
export const ContactList = ({ contacts }) =>
  contacts && contacts.length > 0 ? (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </List>
  ) : (
    'There are no contacts'
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
