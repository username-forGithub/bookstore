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
            <div className="leftblock">
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
              <div className="chart">
                <svg className="circle">
                  <circle
                    className="text-gray-300"
                    strokeWidth="5"
                    strokeDasharray="200px;"
                    strokeDashoffset="0"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-blue-600"
                    strokeWidth="5"
                    strokeDasharray="166px, 55px"
                    strokeDashoffset="80px"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="40"
                    cy="40"
                  />
                </svg>
              </div>
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
