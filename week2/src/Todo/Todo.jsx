import React, { useState } from 'react';
import './todo.css';

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const handleAddTodo = (newTodoContent) => {
    const newTodo = {
      id: todos.length + 1,
      content: newTodoContent,
      isDone: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteDoneTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-container">
      <div class="mainTitle">UMC STUDY PLAN</div>
      
      <form className='addToDo' onSubmit={e => {
        e.preventDefault();
        const input = e.target.todoInput;
        if (input.value.trim() !== '') {
          handleAddTodo(input.value);
          input.value = '';
        }
      }}>
        <input type="text" className='addToDoInfo' placeholder="스터디 계획을 작성해보세요!" />
        <button type="submit">추가</button>
      </form>

      <div className="list">
        <div className="activeToDo">
          <h2>해야 할 일</h2>
          <ul>
            {todos.filter(todo => !todo.isDone).map(todo => (
              <li key={todo.id}>
                {todo.content}
                <button onClick={() => handleToggleTodo(todo.id)}>완료</button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="doneToDo">
          <h2>해낸 일</h2>
          <ul>
            {todos.filter(todo => todo.isDone).map(todo => (
              <li key={todo.id}>
                {todo.content}
                <button onClick={() => handleDeleteDoneTodo(todo.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;