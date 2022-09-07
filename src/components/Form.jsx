import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Form.css';
function FormTodo({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo('');
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Row>
        <Col className='col-8'>
          <input
            type='text'
            placeholder='What to do? Broh'
            className='task-input'
            value={input}
            required
            onChange={onInputChange}
          />
        </Col>
        <Col className='col-2'>
          <Button
            className='button-add'
            type='submit'
          >
            {editTodo ? 'OK' : 'Add'}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormTodo;
