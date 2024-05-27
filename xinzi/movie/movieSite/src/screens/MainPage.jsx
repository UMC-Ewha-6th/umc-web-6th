import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import axios from "axios";

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
  display: ${props => props.$showBanner ? "flex" : "none"};
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
  display: ${props => props.$showText ? "flex" : "none"};
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
    props.$searchUp
      ? css`${fadeIn} 0.3s ease-in-out`
      : props.$searchDown
      ? css`${fadeOut} 0.3s ease-in-out`
      : "none"};

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(true);
  const [searchDown, setSearchDown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/auth/me',  {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsername(response.data.username);
        setLoading(false);

      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    if (localStorage.getItem('token') != null){
      setIsLoggedIn(true);
      fetchData();
    } else setIsLoggedIn(false);

  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Banner $showBanner={show}>
          {loading ? "로딩 중…" : `${username}님 환영합니다`}
        </Banner>
      ) : (
        <Banner $showBanner={show}>환영합니다</Banner>
      )}
      <Text $showText={show}>Find your movies !</Text>
      <SearchContainer $searchUp={!show} $searchDown={searchDown}>
        <SearchBar onSearch={handleSearch} onFocus={handleFocus} onBlur={handleBlur}/>
        {searchQuery && (<SearchResult searchQuery={searchQuery}/> )}
      </SearchContainer>
    </div>
  );
};

export default MainPage;
