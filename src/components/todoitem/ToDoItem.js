import React from 'react'
import Button from '../buttons/Button';

const ToDoItem = () => {
    return (
        <li> Item 1 <Button text="Remove" handleClick={ () => remove()} /> </li>
    );
}

const remove = () => {
    alert('remove clicked')
  }

export default ToDoItem;