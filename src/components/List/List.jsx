import React from 'react';
import classes from './List.module.css';
import { useSelector } from 'react-redux';
import Todo from '../ToDo/ToDo';
const List = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <ul className={classes.list}>
      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
};

export default List;
