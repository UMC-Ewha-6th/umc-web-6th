import React from "react";
import styled, { keyframes } from "styled-components";


const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default Spinner;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: grid;
  place-content: center;
`;