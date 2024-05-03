import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button.styled';

import { List, Item } from './ContactList.styled';

/**
 * Render the list of contacts.
 * Displays default message when no no contacts.
 * @param {object[]} [props.contacts] Contacts array.
 * @param {callback} [props.onDelete] Callback that handles deletion of the contact.
 * @returns {React.Component} List of contacts or default message.
 */
const ContactList = ({ contacts, onDelete }) => {
  /**
   * Handles deletion of the contact.
   */
  const handleDelete = event => {
    const id = event.target.closest('li').dataset.id;
    onDelete(id);
  };

  return (
    <>
      {contacts && contacts.length > 0 ? (
        <List aria-label="Contacts list">
          {contacts.map(el => (
            <Item key={el.id} aria-label="Contact" data-id={el.id}>
              {`${el.name}: ${el.number}`}
              <Button onClick={handleDelete}>Delete</Button>
            </Item>
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
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
