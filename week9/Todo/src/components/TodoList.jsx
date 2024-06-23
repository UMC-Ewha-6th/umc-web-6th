import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const trash = <FontAwesomeIcon icon={faTrashCan} />;

  console.log(todolist);

  const todolistView = todolist.map((todo, idx) => (
    <ListItem key={todolist[idx].id}>
      <Checkbox
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatch(complete(todolist[idx].id))}
      />
      <TodoText complete={todo.complete}>{todo.text}</TodoText>
      <DeleteButton
        type="button"
        onClick={() => dispatch(remove(todolist[idx].id))}
      >
        {trash}
      </DeleteButton>
    </ListItem>
  ));

  return <List>{todolistView}</List>;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TodoText = styled.div`
  flex: 1;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #d9534f;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.3s;
  &:hover {
    color: #c9302c;
  }
`;
