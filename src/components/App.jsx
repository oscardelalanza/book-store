import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './header';

const App = () => (
  <div>
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
