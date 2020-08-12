import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map(book => <Book key={book.id} book={book} />)}
  </table>
);
const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, {})(BooksList);
