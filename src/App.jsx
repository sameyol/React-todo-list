import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <TodoList 
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
