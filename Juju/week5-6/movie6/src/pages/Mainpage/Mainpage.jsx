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
  MovieImg

} from './MainStyle';
import { BiSearch } from "react-icons/bi";
import Movie from '../../components/Movie';
import movieImg from '../../assets/movieImg.png';

const API_KEY = '560edcab022391706f07d9e49f92af34';
const SEARCHURL = 'https://api.themoviedb.org/3/search/movie';


export default function Mainpage() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState('');


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


  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SEARCHURL}?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=ko-KR&page=1`);
      const data = await response.json();
      setSearchResults(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (

    <Banner>
      <MainMiddle>
        환영합니다
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
    </Banner>
  );
}
