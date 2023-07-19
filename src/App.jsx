import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FormTodo from './components/FormTodo.jsx';
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
        <div className='  w-[60%] h-[90%] p-10 rounded border-white border-4 bg-cardblack'>
            {/* <div className='row d-flex-container'> */}
            {/* <div className='col-sm-2 sidebar-container'>
                <Sidebar className='d-flex'></Sidebar>
            </div> */}
            <div className='bg-cardblack'>
                <div className=''>
                    <div
                        className='text-white bg-cardblack font-bold'
                        key='dark'
                        variant='dark'
                    >
                        To Do List <br />
                        {Date().toString()}

                    </div>
                </div>
                <div className='pt-5 bg-cardblack'>
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
                <div className='pt-5'>
                    <TodosList
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
