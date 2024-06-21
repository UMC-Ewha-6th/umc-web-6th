import React from 'react';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`

`;

const Title = styled.div`
  margin-left : 30px;
  margin-top : 20px;
  font-size : 40px;
  font-weight : bold;
`;


function App() {
  return (
    <AppContainer>
      <Title>Todo List</Title>
      <InputTodo />
      <TodoList />
    </AppContainer>
  );
}

export default App;
