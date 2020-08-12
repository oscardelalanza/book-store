import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

const mapStateToProps = state => ({
  book: state.book,
});

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, {})(Book);
