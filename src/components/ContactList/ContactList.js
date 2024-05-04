import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button.styled';

import { List, Item } from './ContactList.styled';

/**
 * Component to contain the list of contact items.
 * Displays default message when no contacts provided.
 * @param {object[]} [props.contacts] Array of contacts.
 * @param {callback} [props.onContactDelete] Callback that handles deletion of the contact.
 * @returns {React.Component} List of contacts or default message.
 */
const ContactList = ({ contacts, onContactDelete }) => {
  /**
   * Handles deletion of the contact.
   */
  const handleDelete = event => {
    const id = event.target.closest('li').dataset.id;
    onContactDelete(id);
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
  ).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
