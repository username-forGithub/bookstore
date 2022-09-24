import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = '9HsmXeeOxPnIgqaSyZNR';

const initialState = [];

export const fetchBooksApi = createAsyncThunk(
  'fetchBooksApi',
  async () => {
    try {
      const getBooks = await axios.get(`${baseUrl}${appId}/books`);
      return getBooks.data;
    } catch (error) {
      return error?.response;
    }
  },
);
export const postBookApi = createAsyncThunk(
  'postBooksApi',
  async (book) => {
    try {
      const postBook = await axios.post(`${baseUrl}${appId}/books`, {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      });
      return postBook.data;
    } catch (error) {
      return error?.response;
    }
  },
);

export const removeBookApi = createAsyncThunk(
  'removeBookApi',
  async (bookId) => {
    try {
      const removeBook = await axios.delete(`${baseUrl}${appId}/books/${bookId}`);
      return removeBook.data;
    } catch (error) {
      return error?.response;
    }
  },
);

const createBookSlices = createSlice({
  name: 'bookslices',
  initialState,
  extraReducers: {
    [fetchBooksApi.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((item) => ({
        item_id: item,
        ...action.payload[item][0],
      }));
      return books;
    },
    [fetchBooksApi.rejected]: (state, action) => action.error.message,
    [postBookApi.fulfilled]: (state, action) => [...state, action.payload],
    [postBookApi.rejected]: (state, action) => action.error.message,
    [removeBookApi.fulfilled]:
    (state, action) => state.filter((item) => item.item_id !== action.meta.arg),
    [removeBookApi.rejected]: (state, action) => action.error.message,
  },
});
export default createBookSlices.reducer;
