import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const handleRemove = () => removeBook(book);

  return (
    <tr className="book d-md-flex flex-md-wrap container mt-md-3 bg-white rounded">
      <td className="id order-md-3 w-100 mb-md-3">{'Book ID: '.concat(book.id.toString())}</td>
      <td className="title order-md-2 w-100">{book.title}</td>
      <td className="category order-md-1 w-100">{book.category}</td>
      <td className="remove order-md-4">
        <button type="button" onClick={handleRemove} className="btn-link border-0 bg-white p-md-0">Remove</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
