import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories } from '../store';
import { createBook } from '../actions';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.createBook(this.state);
    event.preventDefault();
  }

  render() {
    const { title, category } = this.state;

    return (
      <div>
        <h3>Add New Book</h3>
        <form>
          <div>
            <label htmlFor="title">
              Title:
              <input type="text" id="title" name="title" placeholder="Book Title" onChange={this.handleChange} value={title} />
            </label>
          </div>
          <div>
            <label htmlFor="category">
              Category:
              <select id="category" name="category" value={category} onChange={this.handleChange}>
                <option selected>Select Category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

BooksForm.prototypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook(book) {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
