import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Banner = styled.div`
  display: ${props => props.showBanner ? "flex" : "none"};
  height: 230px;
  width: 100%;
  color: white;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px 0px 30px 0px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  display: ${props => props.showText ? "flex" : "none"};
  width: 100%;
  color: white;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${props =>
    props.searchUp
      ? css`${fadeIn} 0.3s ease-in-out`
      : props.searchDown
      ? css`${fadeOut} 0.3s ease-in-out`
      : "none"};
`;

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(true);
  const [searchDown, setSearchDown] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFocus = () => {
    setShow(false);
    setSearchDown(false);
  }

  const handleBlur = () => {
    if(!searchQuery) {
      setShow(true);
      setSearchDown(true);
    }
  }

  return (
    <div>
      <Banner showBanner={show}>환영합니다</Banner>
      <Text showText={show}>Find your movies !</Text>
      <SearchContainer searchUp={!show} searchDown={searchDown}>
        <SearchBar onSearch={handleSearch} onFocus={handleFocus} onBlur={handleBlur}/>
        {searchQuery && (<SearchResult searchQuery={searchQuery}/> )}
      </SearchContainer>
    </div>
  );
};

export default MainPage;
