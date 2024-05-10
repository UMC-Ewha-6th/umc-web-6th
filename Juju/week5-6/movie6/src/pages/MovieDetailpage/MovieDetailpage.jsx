import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {
    DetailContainer,
    DetailImg,
    DetailInfo,
    DetailTitle,
    DetailVote,
    Starcontainer,
    DetailOverview,
    ReleaseDate,
    Text,
    Overview,
    Overview2,
    BackGroundImage,
    CreditContainer,
    ImgContainer,
    Name,
    Profile,
    CreditTitle,
    CreditBox,
    Role,
    DetailBox

} from './MovieDetailStyle';
import axios from 'axios';


const baseUrl = 'https://image.tmdb.org/t/p/w200';
const baseUrl2 = 'https://image.tmdb.org/t/p/w780';
const API_KEY = '560edcab022391706f07d9e49f92af34';
const defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';


function Rating ({rating}){

    const numOfStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < numOfStars; i++) {
        stars.push(<span key={i}>⭐️</span>);
    }

    return(
        <Starcontainer>  
            {stars}
        </Starcontainer>
    );

}


export default function MovieDetail (){

    const [movieDetail, setMovieDetail ] = useState([]);
    const [credits, setCredits] = useState([]);
    const { state } = useLocation();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieDetailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${state.id}?language=ko-KR&api_key=${API_KEY}`);
                const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${state.id}/credits?language=en-US&api_key=${API_KEY}`);
                setMovieDetail(movieDetailResponse.data);
                setCredits(creditsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [state.id]);


    return(
        <DetailBox>
        <BackGroundImage src={baseUrl2 + movieDetail.backdrop_path} />
        <DetailContainer>
            <DetailImg>
                <img src= {baseUrl + movieDetail.poster_path} width = "350px"/>
            </DetailImg>
            <DetailInfo>
                <DetailTitle>{movieDetail.title}</DetailTitle>
                <DetailVote>
                    평점&nbsp;
                    <Rating rating={movieDetail.vote_average} />
                </DetailVote>
                <ReleaseDate>개봉일&nbsp;&nbsp;{movieDetail.release_date}</ReleaseDate>
                <DetailOverview>
                    <Text>줄거리</Text>
                    {movieDetail.overview ? <Overview>{movieDetail.overview}</Overview> : <Overview2>TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.</Overview2>}
                </DetailOverview>
            </DetailInfo>
        </DetailContainer>
        <CreditBox>
        <CreditTitle>출연진 및 제작진</CreditTitle>
        <CreditContainer>
            {credits.cast && credits.cast.map((item, i) => (
                <Profile key={i}>
                    <ImgContainer>
                        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : defaultImageUrl} alt={item.name} />
                    </ImgContainer>
                    <Name>{item.name}</Name>
                    <Role>acting</Role>
                </Profile>
            ))}
            {credits.crew && credits.crew.map((item, i) => (
                <Profile key={i}>
                    <ImgContainer>
                        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : defaultImageUrl} alt={item.name} />
                    </ImgContainer>
                    <Name>{item.name}</Name>
                    <Role>directing</Role>
                </Profile>
            ))}
        </CreditContainer>
        </CreditBox>
        </DetailBox>
    );
}
