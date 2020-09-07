import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../store';

const CategoryFilter = ({ categoryFilter }) => {
  const handleFilterChange = event => {
    categoryFilter(event.target.value);
  };

  return (
    <select className="filter form-control col-md-2 mb-md-2" onChange={handleFilterChange}>
      <option value="">All</option>
      {categories.map(category => <option value={category} key={category}>{category}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  categoryFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
