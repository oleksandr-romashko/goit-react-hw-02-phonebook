import React from 'react';
import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

/**
 * Render the list of contacts.
 * Displays default message when no no contacts.
 * @param {string} [props.filterText] Filter input text.
 * @param {object[]} [props.contacts] Contacts array.
 * @param {callback} [props.onInputChange] Callback that handles filter input change.
 * @returns {React.Component} List of contacts or default message.
 */
const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts && contacts.length > 0 ? (
        <List aria-label="Contacts list">
          {contacts.map(el => (
            <li key={el.id} aria-label="Contact">
              {`${el.name}: ${el.number}`}
            </li>
          ))}
        </List>
      ) : (
        'There are no contacts'
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
