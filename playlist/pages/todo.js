import styled from 'styled-components';
import InputTodo from '../components/Todo/InputTodo';
import TodoList from '../components/Todo/TodoList';

const Container = styled.div`
  margin-top: 70px;
`;

export default function TodoPage() {
  return (
    <Container>
      <InputTodo />
      <TodoList />
    </Container>
  );
}
