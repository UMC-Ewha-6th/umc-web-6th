import React from "react";
import styled, { keyframes } from "styled-components";


const DataLoading = () => {
  return (
    <LoaderWrapper>
      <Loader>데이터를 가져오는 중입니다...</Loader>
    </LoaderWrapper>
  );
};

export default DataLoading;

const Loader = styled.h4`
  color: white;
`;

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  display: grid;
  background-color: rgb(56, 58, 102);
  justify-content: center;
`;