import React from 'react';
import { categories } from '../store';

const CategoryFilter = () => {
  const filters = ['All', ...categories];

  return (
    <select name="" id="">
      {filters.map(category => <option value="category" key={category}>category</option>)}
    </select>
  );
};

export default CategoryFilter;
