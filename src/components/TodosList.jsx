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
        <div className='bg-cardblack'>
            {todos.map((todo) => (
                <div
                    className='cardList text-white'
                    key={todo.id}
                >
                    <div className={`cardRow flex justify-between mt-2 pl-4 py-2
                            animate-jump animate-ease-in border-pink-200 border-2 
                            rounded-lg items-center ${todo.completed ? 'border-green-300' : ''}`}>
                        <Col className='col-8'>
                            <div className={`${todo.completed ? 'completed text-gray-300' : 'notComplete'} select-none `}>
                                {todo.title}
                            </div>
                        </Col>
                        <Col
                            className='col'
                            id='todoCard'
                        >
                            <button
                                className='button-complete task-button hover:bg-slate-200 rounded-lg flex '
                                onClick={() => handleComplete(todo)}
                            >
                                <BsCheck
                                    size='50'
                                    color='white'
                                />
                            </button>
                        </Col>
                        <Col
                            className='col'
                            id='todoCard'
                        >
                            <button
                                variant='secondary'
                                className='button-complete task-button hover:bg-slate-200 rounded-lg flex items-center h-full justify-center'
                                onClick={() => handleEdit(todo)}
                            >
                                <FaEdit
                                    size='50'
                                    color='white'
                                />
                            </button>
                        </Col>
                        <Col
                            className='col'
                            id='todoCard'
                        >
                            <button
                                className='button-complete task-button hover:bg-slate-200 rounded-lg flex items-center h-full justify-center'
                                onClick={() => handleDelete(todo)}
                            >
                                <AiFillDelete
                                    size='50'
                                    color='white'
                                />
                            </button>

                        </Col>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default TodosList;
