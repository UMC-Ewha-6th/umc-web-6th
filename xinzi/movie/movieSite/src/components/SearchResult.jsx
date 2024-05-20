import React from "react";
import styled, { keyframes } from "styled-components";
import RenderMovies from "./RenderMovies";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 640px;
  width: 1200px;
  background-color: rgb(20, 20, 50);
  border-radius: 10px;
  align-items: center;
  overflow: auto;
  animation: ${fadeIn} 0.3s ease-in-out; /* 애니메이션 효과 적용 */

  /* 스크롤바 스타일 */
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #2f3542;
            border-radius: 8px;
            background-clip: padding-box;
            border: 1.5px solid transparent;
        }
        &::-webkit-scrollbar-track {
            background-color: grey;
            border-radius: 8px;
            box-shadow: inset 0px 0px 4px white;
        }
`;

const SearchResult = ({ searchQuery }) => {
  return (
    <Wrapper>
      <RenderMovies fetchUrl={`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=1`} />
    </Wrapper>
  );
};

export default SearchResult;
