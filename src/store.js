import { createStore } from 'redux';
import reducer from './reducers/index';

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const id = [];
let i = 0;

while (i < 5) {
  const number = Math.floor(Math.random() * 10);
  if (!id.includes(number)) {
    id[i] = number;
    i += 1;
  }
}

const initialState = {
  books: [
    {
      id: id[0],
      title: 'Linear Algebra with Applications',
      category: categories[5],
    },
    {
      id: id[1],
      title: 'Differential Calculus',
      category: categories[5],
    },
    {
      id: id[2],
      title: 'Discrete Math',
      category: categories[5],
    },
    {
      id: id[3],
      title: 'The Necronomicon',
      category: categories[2],
    },
    {
      id: id[4],
      title: 'The Martian Chronicles',
      category: categories[6],
    },
  ],
  filter: 'all',
};

export default createStore(reducer, initialState);
