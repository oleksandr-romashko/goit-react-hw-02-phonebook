import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import Input from 'components/Input/Input.styled';

import { List } from './ContactList.styled';

/**
 * Render the list of contacts.
 * Displays default message when no no contacts.
 * @param {string} [props.filterText] Filter input text.
 * @param {object[]} [props.contacts] Contacts array.
 * @param {callback} [props.onInputChange] Callback that handles filter input change.
 * @returns {React.Component} List of contacts or default message.
 */
const ContactList = ({ filterText, contacts, onInputChange }) => {
  /**
   * Handles input change.
   * Calls provided props callback that handles input change.
   * @param {string} event.target.name Name of the element.
   * @param {string} event.target.value Element value.
   */
  const handleFilterChange = ({ target: { name, value } }) => {
    onInputChange({ name, value });
  };

  return (
    <>
      <div>
        Find contacts by name
        <Input
          onChange={throttle(handleFilterChange, 150, { trailing: false })}
          value={filterText}
          type="text"
          name="filter"
          title="Search field to filter contact list. Case insensitive."
        />
      </div>
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
  filterText: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onInputChange: PropTypes.func.isRequired,
};

export default ContactList;
