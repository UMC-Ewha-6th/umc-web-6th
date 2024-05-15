import React from "react";

const ToDoItem = ({ todo, completeToDo, deleteToDo, isCompleteList }) => {
  const handleCompleteClick = () => {
    completeToDo(todo.id);
  };

  const handleDeleteClick = () => {
    deleteToDo(todo.id);
  };

  return (
    <li>
      <span>{todo.content}</span>
      {isCompleteList ? (
        <button onClick={handleDeleteClick}>삭제</button>
      ) : (
        <button onClick={handleCompleteClick}>완료</button>
      )}
    </li>
  );
};

export default ToDoItem;

