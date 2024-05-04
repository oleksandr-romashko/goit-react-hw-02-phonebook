import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import Input from 'components/Input/Input.styled';
import { FilterWrapper } from './Filter.styled';
import React from 'react';

/**
 * Contacts filter component.
 * @param {string} props.filterText Filter input text.
 * @param {callback} props.onFilterInputChange Callback to handle input change.
 * @returns {React.Component} Filter component.
 */
const Filter = ({ filterText, onFilterInputChange }) => {
  /**
   * Handles input change.
   * Calls provided props callback that handles input change.
   * @param {string} event.target.name Name of the element.
   * @param {string} event.target.value Element value.
   */
  const handleInputChange = ({ target: { name, value } }) => {
    onFilterInputChange({ name, value });
  };

  return (
    <FilterWrapper>
      Find contacts by name
      <Input
        onChange={throttle(handleInputChange, 150, { trailing: false })}
        value={filterText}
        type="text"
        name="filter"
        title="Search field to filter contact list. Case insensitive."
      />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  filterText: PropTypes.string,
  onFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
