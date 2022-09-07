import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCheck } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import './TodosList.css';

function TodosList({ todos, setTodos, setEditTodo }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <Container className='cardContainer'>
      {/* <Col> */}
      {todos.map((todo) => (
        <Card
          className='cardList'
          key={todo.id}
        >
          {/* <input
                type='text'
                value={todo.title}
                className='list'
                onChange={(event) => event.preventDefault()}
              /> */}
          <Row className='cardRow'>
            <Col className='col-8'>
              <div className={todo.completed ? 'completed' : 'notComplete'}>
                {todo.title}
              </div>
            </Col>
            <Col
              className='col'
              id='todoCard'
            >
              <Button
                className='button-complete task-button'
                onClick={() => handleComplete(todo)}
              >
                <BsCheck
                  size='60'
                  color='white'
                />
              </Button>
            </Col>
            <Col
              className='col'
              id='todoCard'
            >
              <Button
                variant='secondary'
                className='button-complete task-button'
                onClick={() => handleEdit(todo)}
              >
                <FaEdit
                  size='50'
                  color='white'
                />
              </Button>
            </Col>
            <Col
              className='col'
              id='todoCard'
            >
              <Button
                variant='danger'
                className='button-complete task-button'
                onClick={() => handleDelete(todo)}
              >
                <AiFillDelete
                  size='50'
                  color='white'
                />
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
      {/* </Col> */}
    </Container>
  );
}

export default TodosList;
