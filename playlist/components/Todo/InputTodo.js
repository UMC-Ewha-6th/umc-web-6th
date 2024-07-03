import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//useDispatch 객체는 dispatch로 재선언 후, dispatch 변수를 활용해 액션 호출
//redux의 액션 생성함수를 실행하여 리덕스 스토어에 변경된 상태값을 저장하기 위해서 useDispatch 리액트 훅을 통해 액션을 실행해야함
import { add } from '../../redux/todoSlice';
import styled from 'styled-components';

const Container = styled.div`
  width: 100;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 37px;
  border: 2px solid gray;
  border-radius: 5px;
  outline: none;
  padding-left: 5px;
  font-size: 13px;
  color: black;
`;

const Button = styled.input`
  width: 37px;
  height: 37px;
  text-align: center;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  fiont-weight: 600;
`;

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todoList, setTodoList] = useState({
    id: 0,
    text: '',
  });

  function handleText(e) {
    setTodoList({ text: e.target.value });
  }

  function onReset() {
    setTodoList({ text: '' });
  }

  return (
    <Container>
      <Title>TODO LIST</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoList.text.trim() !== '') {
            dispatch(add(todoList.text));
          } else alert('할 일을 입력해주세요!');
          onReset();
        }}
      >
        <Box>
          <Input type="text" value={todoList.text} onChange={handleText} />
          <Button type="submit" value="✓" />
        </Box>
      </form>
    </Container>
  );
}
