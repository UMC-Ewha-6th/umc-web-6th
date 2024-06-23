import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Cart />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default App;
