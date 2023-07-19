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
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className='bg-cardblack flex justify-around items-center p-1 border-white border-2 rounded-lg focus-within:scale-110 transition-all transition duration-300'>
                <div className='col-8 rounded-3xl flex'>
                    <input
                        type='text'
                        placeholder='What to do?'
                        className='task-input bg-cardblack text-lg text-white text-3xl outline-none placeholder-gray-600'
                        value={input}
                        required
                        onChange={onInputChange}
                    />
                </div>
                <div className='col-2 flex h-full'>
                    <button
                        className='button-add text-white border-2 rounded-lg h-16 hover:bg-slate-700 hover:text-black hover:scale-105 transition-all'
                        type='submit'
                    >
                        {editTodo ? 'OK' : 'Add'}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormTodo;
