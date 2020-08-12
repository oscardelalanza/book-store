import { createStore } from 'redux';
import bookReducer from './reducers/books';

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'Linear Algebra with Applications',
      category: categories[5],
    },
    {
      id: Math.random(),
      title: 'Differential Calculus',
      category: categories[5],
    },
    {
      id: Math.random(),
      title: 'Discrete Math',
      category: categories[5],
    },
    {
      id: Math.random(),
      title: 'The Necronomicon',
      category: categories[2],
    },
    {
      id: Math.random(),
      title: 'The Martian Chronicles',
      category: categories[6],
    },
  ],
};

export default createStore(bookReducer, initialState);
