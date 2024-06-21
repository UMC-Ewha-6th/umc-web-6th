// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? 'gray' : 'black')};
`;

const TodoText = styled.span`
  flex-grow: 1;
  cursor: pointer;
  padding: 10px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid gray;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${({ completed }) => (completed ? 'green' : 'transparent')};
`;

const DeleteButton = styled(Button)`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
`;

function App() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.items) || [];
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim().length === 0) return;
    dispatch(addTodo(text));
    setText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <AppContainer>
      <h1>Todo List</h1>
      <Input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new todo"
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <Circle 
              completed={todo.completed}
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
            <TodoText onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </TodoText>
            <DeleteButton onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </AppContainer>
  );
}

export default App;
