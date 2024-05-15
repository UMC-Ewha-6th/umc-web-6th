// ToDoList.js
import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = ({ todos, completeToDo, deleteToDo, isCompleteList }) => {
  return (
    <ul >
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          completeToDo={completeToDo}
          deleteToDo={deleteToDo}
          isCompleteList={isCompleteList}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
