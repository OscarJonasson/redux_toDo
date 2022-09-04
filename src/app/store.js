import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TodoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
