import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import reducerStatus from './categories/categories';

const rootReducer = combineReducers({ books: bookReducer, status: reducerStatus });
const store = configureStore({ reducer: rootReducer });

export default store;
