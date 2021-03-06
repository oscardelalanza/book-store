import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, filterChange, filter }) => {
  const handleRemove = book => {
    removeBook(book);
  };

  const handleFilterChange = category => {
    filterChange(category);
  };

  const getBooks = () => {
    if (filter === 'All' || filter === '') {
      return books;
    }

    return books.filter(book => book.category === filter);
  };

  return (
    <div className="container books-list d-md-flex flex-md-wrap justify-content-md-end mt-md-3 mb-md-4">
      <CategoryFilter categoryFilter={handleFilterChange} />
      <table className="container p-md-0 m-md-0">
        <thead>
          <tr className="d-md-none">
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {getBooks().map(book => <Book key={book.id} book={book} removeBook={handleRemove} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => (dispatch(removeBook(book))),
  filterChange: category => (dispatch(changeFilter(category))),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
