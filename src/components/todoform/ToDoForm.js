import React from 'react'
import './ToDoForm.css'
import { useState } from 'react'
import Button from '../buttons/Button';

const ToDoForm = () => {
  const [todoItem, setToDoItem] = useState();
    return (
        <div className='Add-To-Do'>
          <input type='text' id='todoInput'/>
          <Button text="Add" handleClick={ () => add()} /> 
        </div>
    );
}

const add = () => {
  alert('add clicked')
}

export default ToDoForm;