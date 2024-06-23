import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import styled from "styled-components";

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodolist({ ...todolist, text: e.target.value });
  }

  function onReset() {
    setTodolist({ ...todolist, text: "" });
  }

  return (
    <InputWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else {
            alert("할 일을 입력해주세요!");
          }
          onReset();
        }}
      >
        <div>
          <TextInput type="text" value={todolist.text} onChange={handleText} />
          <SubmitButton type="submit" value="+" />
        </div>
      </form>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 200px;
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  width: 70%;
`;

const SubmitButton = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: blue;
  color: white;
  cursor: pointer;
`;
