import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import Input from 'components/Input/Input.styled';
import { FilterWrapper } from './Filter.styled';

const Filter = ({ filterText, onInputChange }) => {
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
    <FilterWrapper>
      Find contacts by name
      <Input
        onChange={throttle(handleFilterChange, 150, { trailing: false })}
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
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
