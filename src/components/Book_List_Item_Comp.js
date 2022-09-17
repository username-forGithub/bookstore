import React from 'react';

const BookListItem = () => (
  <li>
    <div>
      <h5>Economy</h5>
      <p className="title">The Hunger Games</p>
      <p className="author">Suzanne Collins</p>
      <ul className="list-action-btns">
        <li>Comments</li>
        <li>Remove</li>
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

export default BookListItem;
