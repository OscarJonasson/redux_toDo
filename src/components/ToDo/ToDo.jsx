import React from 'react';
import classes from './ToDo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../features/todo/TodoSlice';

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <div>{title}</div>
      <div>
        <button
          className={classes.remove}
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
