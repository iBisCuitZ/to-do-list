import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.jsx';
import TodosList from './components/TodosList.jsx';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <div className='to-do-list'>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      {console.log("CookieXD")}
      <div>
        <TodosList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
