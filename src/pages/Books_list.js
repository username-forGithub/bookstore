import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksApi } from '../redux/books/books';
import BookList from '../components/Book_List_Comp';
import AddBook from '../components/Add_Book';

const BooksList = () => {
  const booksObj = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksApi());
  }, [booksObj.length, dispatch]);

  return (
    <div className="book_wrapper">
      {booksObj.length > 0
        ? <BookList bookList={booksObj} />
        : <p className="logo text-center pt-6">No books found</p>}
      <hr />
      <AddBook />
    </div>
  );
};

export default BooksList;
