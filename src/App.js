import React from 'react';
import './App.css';
import AddToDo from './components/addtodo/AddToDo';
import ToDoItem from './components/todoitem/ToDoItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My TO-DO List</h2>
        <AddToDo></AddToDo>
        <ul>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
          <ToDoItem></ToDoItem>
        </ul>
      </header>
    </div>
  );
}

export default App;
