import React, { useState } from 'react';
import classes from './AddTodo.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/TodoSlice';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        task: value,
      })
    );
    setValue('');
  };

  return (
    <>
      <input
        type="text"
        className={classes.add}
        placeholder="Add task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={onSubmit}>Save</button>
    </>
  );
};

export default AddTodo;
