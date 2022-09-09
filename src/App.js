import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FormTodo from './components/Form.jsx';
import TodosList from './components/TodosList.jsx';
import Sidebar from './components/Sidebar';
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className='appJSContainer container-fluid d-flex remove-padding'>
      {/* <div className='row d-flex-container'> */}
      <div className='col-sm-2 sidebar-container'>
        <Sidebar className='d-flex'></Sidebar>
      </div>
      <div className='col-md-10 '>
        <div className='row container-fluid header-container'>
          <div
            className='alert alert-dark'
            key='dark'
            variant='dark'
          >
            To Do List <br />
            {Date().toString()}
            
          </div>
        </div>
        <div className='row container-fluid form-container'>
          <FormTodo
            className='mainForm'
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
