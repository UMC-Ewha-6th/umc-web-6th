import React, { useState, useEffect } from "react";
import Title from "./components/Title/Title";
import InputForm from "./components/InputForm/InputForm";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (content) => {
    const newTodo = {
      id: todos.length + 1,
      content,
      isDone: false
    };
    setTodos([...todos, newTodo]);
  };

  const completeToDo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isDone: true } : todo
    ));
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="body">
      <Title />
      <InputForm addToDo={addToDo} />
      <div className="toDoDiv">
      <ToDoContainer title="해야 할 일">
        <ToDoList
          todos={todos.filter(todo => !todo.isDone)}
          completeToDo={completeToDo}
          deleteToDo={deleteToDo}
          isCompleteList={false}
        />
      </ToDoContainer>
      <ToDoContainer title="해낸 일">
        <ToDoList
          todos={todos.filter(todo => todo.isDone)}
          completeToDo={completeToDo}
          deleteToDo={deleteToDo}
          isCompleteList={true}
        />
      </ToDoContainer>
      </div>
    </div>
  );
}

export default App;
