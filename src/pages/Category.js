import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const categoriesObj = useSelector((state) => state.status);
  const statusClick = () => {
    dispatch(actionStatus());
  };

  return (
    <>
      <div className="cat"><button onClick={statusClick} type="button">CHECK STATUS</button></div>
      <span className="catobj">{categoriesObj}</span>
    </>
  );
};

export default Category;
