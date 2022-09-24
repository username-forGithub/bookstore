const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';
const initialState = [];

const reducerStatus = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }
    default:
      return state;
  }
};

export const actionStatus = () => ({
  type: CHECK_STATUS,
});

export default reducerStatus;
