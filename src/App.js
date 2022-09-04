import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

function App() {
  return (
    <>
      <h1>ToDo</h1>
      <AddTodo />
      <List />
    </>
  );
}

export default App;
