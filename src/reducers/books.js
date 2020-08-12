import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        books: state.books.concat(action.book),
      };

    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.book.id),
      };

    default:
      return state;
  }
};

export default bookReducer;
