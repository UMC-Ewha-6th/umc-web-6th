import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <InputTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
