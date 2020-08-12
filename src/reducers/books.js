import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return console.log('create a book');

    case REMOVE_BOOK:
      return console.log('remove a book');

    default:
      return state;
  }
};

export default bookReducer;
