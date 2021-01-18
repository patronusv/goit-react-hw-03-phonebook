import React from 'react';
import PropTypes from 'prop-types';
import FilterWrapper from './FilterStyled';
const Filter = ({ onChange, filter }) => {
  return (
    <FilterWrapper>
      <label className="filter-label">
        Search by name
        <input className="filter-input" type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    </FilterWrapper>
  );
};

export default Filter;
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
