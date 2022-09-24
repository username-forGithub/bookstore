import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookApi } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addNewBook = () => {
    if (!title || !category || !author) return;
    const newBook = {
      item_id: uuidv4(),
      category,
      title,
      author,
    };
    dispatch(postBookApi(newBook));
    setAuthor('');
    setCategory('');
    setTitle('');
  };
  const titleChange = (event) => setTitle(event.target.value);
  const authorChange = (event) => setAuthor(event.target.value);
  const categoryChange = (event) => setCategory(event.target.value);
  return (
    <form className="addbook">
      <h3>ADD NEW BOOK</h3>
      <div className="form-control">
        <input onChange={titleChange} value={title} placeholder="Book title" />
        <input onChange={authorChange} value={author} placeholder="Author" />
        <div className="selectwrapper">
          <select
            required
            className="lg:w-2/6 shadow-sm"
            id="categoryList"
            value={category}
            onChange={categoryChange}
          >
            <option>Select Category</option>
            <option>Action</option>
            <option>Fiction</option>
            <option>Economy</option>
            <option>Science Fiction</option>
          </select>
        </div>
        <button onClick={addNewBook} type="button">ADD BOOK</button>
      </div>
    </form>
  );
};

export default AddBook;
