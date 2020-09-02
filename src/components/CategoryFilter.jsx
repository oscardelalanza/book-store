import React from 'react';
import { categories } from '../store';

const CategoryFilter = () => (
  <select name="" id="">
    <option value="">All</option>
    {categories.map(category => <option value="category" key={category}>{category}</option>)}
  </select>
);

export default CategoryFilter;
