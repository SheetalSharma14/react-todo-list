import React from 'react';
import './App.css';

import ToDoItem from './components/todoitem/ToDoItem';
import ToDoForm from './components/todoform/ToDoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My TO-DO List</h2>
        <ToDoForm></ToDoForm>
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
