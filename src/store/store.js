import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import { filterReducer } from './filterSlice';

export default configureStore({
  reducer: {
    todoReducer: todoReducer,
    filterReducer: filterReducer
  },
});
