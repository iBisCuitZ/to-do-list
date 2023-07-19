import React, { useState,useEffect } from 'react';
import './App.css';
import FormTodo from './components/Form.jsx';
import TodosList from './components/TodosList.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [editTodo, setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));

  },[todos])
  return (
    <Container className='appJSContainer'>
      <Row className='justify-content-md-center'>
        <Col className='col-md-8 '>
          <div className='to-do-list'>
            <Alert
              className='center-block'
              key='dark'
              variant='dark'
            >
              To Do List
            </Alert>
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
