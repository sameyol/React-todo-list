import React from "react";
import {TiEdit} from 'react-icons/ti';
import {RiCloseCircleLine} from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed };
            }
            return item;
        }));
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                <i className=""><AiOutlineCheckCircle /></i>
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                <i className=""><TiEdit /></i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <i className=""><RiCloseCircleLine /></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
