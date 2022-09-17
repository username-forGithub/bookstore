import React from 'react';
import BookListsComp from '../components/Book_List_Comp';
import AddBook from '../components/Add_Book';

const BooksList = () => (
  <div className="book_wrapper">
    <BookListsComp />
    <hr />
    <AddBook />
  </div>
);

export default BooksList;
