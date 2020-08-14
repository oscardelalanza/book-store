import React from 'react';
import { categories } from '../store';

const BooksForm = () => (
  <div>
    <h3>Add New Book</h3>
    <form>
      <div>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" placeholder="Book Title" />
        </label>
      </div>
      <div>
        <label htmlFor="category">
          Category:
          <select id="category">
            <option selected>Select Category</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </label>
      </div>
    </form>
  </div>
);

export default BooksForm;
