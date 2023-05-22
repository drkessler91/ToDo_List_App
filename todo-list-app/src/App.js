import React, { useEffect, useState }  from 'react';
import axios from 'axios';



const TodoListPage = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    const newItem = {
      // Define the properties of the new todo item
      // Example:
      id: 1,
      title: newTodoTitle,
    };

    axios.post('/todo', newItem)
    .then(response => {
      console.log('Todo item added successfully:', response.data);
    })
    .catch(error => {
      console.error('Failed to add todo item:', error);
    });


    // Clear the input field after adding the todo item
    setNewTodoTitle('');
  };
    const handleInputChange = (event) =>{
      setNewTodoTitle(event.value);
    
  };

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type = "text"
          value = {newTodoTitle}
          onChange={handleInputChange}
          placeholder='enter Todo item'
        />
        <button onClick={handleAddTodo}>Add Todo item</button>
      </div>
      
    );
};


export default TodoListPage;
