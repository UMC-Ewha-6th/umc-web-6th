import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../../redux/todoSlice';
import styled from 'styled-components';

const Container = styled.div`
  width: 347px;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: top;
  margin-bottom: 10px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  height: 420px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Input = styled.input`
  width: 15px;
  height: 15px;
`;

const Todo = styled.div`
  width: 300px;
  margin: 0 4px;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  word-break: break-all;
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 17px;
`;

export default function TodoList() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todoList);

  const todoListView = todoList.map((todo, idx) => (
    <Li key={todoList[idx].id}>
      <Input
        type="checkbox"
        onChange={() => dispatch(complete(todoList[idx].id))}
      />
      <Todo complete={todo.complete}>{todo.text}</Todo>
      <Button type="button" onClick={() => dispatch(remove(todoList[idx].id))}>
        🗑️
      </Button>
    </Li>
  ));

  return (
    <Container>
      <Ul>{todoListView}</Ul>
    </Container>
  );
}
