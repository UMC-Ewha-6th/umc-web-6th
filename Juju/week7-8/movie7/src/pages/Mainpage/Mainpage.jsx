import React, {useState, useEffect} from 'react';
import {
  Banner,
  MainMiddle,
  MainBottom,
  SearchBox,
  Boxcontainer,
  Icon,
  ResultContainer,
  Text,
  MovieImg,
  Welcome,
  BannerText

} from './MainStyle';
import { BiSearch } from "react-icons/bi";
import Movie from '../../components/Movie';
import movieImg from '../../assets/movieImg.png';
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';

const API_KEY = '560edcab022391706f07d9e49f92af34';
const SEARCHURL = 'https://api.themoviedb.org/3/search/movie';


export default function Mainpage() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');

  const { isLoggedIn } = useAuth();


  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery) {
        handleSearch();
      } else {
        setSearchResults([]);
      }
    }, 700);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]); 


  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      axios.get('http://localhost:8080/auth/me', {
        headers: { Authorization: `Bearer ${token}` }}
      )
      .then(response => {
        const userData = response.data;
        const { username, name, age, email} = userData;
        setUsername(username);
        setName(name);
        setAge(age);
        setEmail(email);
      })
      .catch(error => {
        console.error(error);
      })
    }


  }, []);

  useEffect(() => {
    // 사용자 이름이 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('username', username);

  }, [username]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SEARCHURL}?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=ko-KR&page=1`);
      const data = await response.json();
      setSearchResults(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <Banner>
      <MainMiddle>
      {isLoggedIn === undefined ? (
          <BannerText>배너에 로딩 중...</BannerText>
        ) : (
          isLoggedIn ? (
              <Welcome>{username}님 환영합니다</Welcome> 
            ) : (
                <Welcome>환영합니다</Welcome>
              )
      )}
      </MainMiddle>
      <MainBottom>
          <MovieImg src={movieImg} alt='movie' />
          Find your Movies!
          <Boxcontainer>
          <SearchBox
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
           <Icon onClick={handleSearch}>
            <BiSearch size="25"/>
          </Icon>
          </Boxcontainer> 
      </MainBottom>
      <>
      {loading ? (
        <Text>데이터를 받아오는 중입니다...</Text>
      ) : (
        searchResults.length > 0 && (
          <ResultContainer>
            {searchResults.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                release_date={item.release_date}
              />
            ))}
          </ResultContainer>
        )
      )}
      </>
    </Banner>
  );
}
