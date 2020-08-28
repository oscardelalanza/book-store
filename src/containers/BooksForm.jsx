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
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { createBook } = this.props;
    const { title, category } = this.state;
    const book = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };

    if (title && category) {
      createBook(book);
      this.setState({
        title: '',
        category: '',
      });
    }

    event.preventDefault();
  }

  render() {
    const { title, category } = this.state;

    return (
      <div>
        <h3>Add New Book</h3>
        <form onSubmit={this.handleSubmit}>
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
                <option value={null} defaultValue>Select Category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </label>
          </div>
          <input type="submit" value="Create Book" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => (dispatch(createBook(book))),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
