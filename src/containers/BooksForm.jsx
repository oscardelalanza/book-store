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
    event.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    const book = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };

    createBook(book);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;

    return (
      <div className="container books-form">
        <h3 className="title mb-md-3">ADD NEW BOOK</h3>
        <form className="form-inline mb-md-5" onSubmit={this.handleSubmit}>
          <div className="form-group col-md-7 pl-md-0">
            <input type="text" className="form-control w-100" id="title" name="title" placeholder="Book Title" onChange={this.handleChange} value={title} required />
          </div>
          <div className="form-group col-md-3">
            <select id="category" className="form-control w-100" name="category" value={category} onChange={this.handleChange} required>
              <option value="">Select Category</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <input type="submit" className="btn btn-primary col-md-2" value="Create Book" />
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
