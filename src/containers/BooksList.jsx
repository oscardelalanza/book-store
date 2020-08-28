import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
      <th>Remove</th>
    </thead>
    <tbody>
      {books.map(book => <Book key={book.id} book={book} />)}
    </tbody>
  </table>
);
const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => (dispatch(removeBook(book))),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
