import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';
// disabling camelcase for item_id field coming from /books API
/* eslint-disable camelcase */
const BookList = ({ bookList }) => {
  const dispatch = useDispatch();
  const removeClick = (event) => dispatch(removeBookApi(event.target.id));

  return (
    <ul className="bookLists">

      {bookList.map((book) => {
        const {
          item_id,
          category,
          title,
          author,
        } = book;
        return (

          <li key={item_id}>
            <div>
              <h5>{category}</h5>
              <p className="title">{title}</p>
              <p className="author">{author}</p>
              <ul className="list-action-btns">
                <li>Comments</li>
                <li>
                  <button
                    type="button"
                    className="del"
                    id={item_id}
                    onClick={removeClick}
                  >
                    Remove
                  </button>
                </li>
                <li>Edit</li>
              </ul>
            </div>
            <div className="completion-status">
              <div className="chart" />
              <div className="right-div">
                <p>64%</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="chapter-section">
              <p style={{ opacity: '0.5' }}>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </li>
        );
      })}
    </ul>

  );
};

export default BookList;
