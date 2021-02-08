import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
import Filters from './components/filters';

function App() {
  return (
    <div className="App">
      <br/>
      Github<a href="https://github.com/shamsyum">@shamsyum</a>
      <h2 style={{marginTop: "-5px"}}>Todo-App by Shams </h2>
      <AddTodo />,
      <Filters />,
      <TodoList />
      
    </div>
  );
}

export default App;
