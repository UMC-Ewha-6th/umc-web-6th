import React from 'react';
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
    Overview2
} from './MovieDetailStyle';

const baseUrl = 'https://image.tmdb.org/t/p/w200';

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

    const{ state } = useLocation();

    function getFee(state){
        return state? state.overview : '없습니다.';
    }


    return(

        <DetailContainer>
            <DetailImg>
                <img src= {baseUrl + state.poster_path} width = "350px"/>
            </DetailImg>
            <DetailInfo>
                <DetailTitle>{state.title}</DetailTitle>
                <DetailVote>
                    평점&nbsp;
                    <Rating rating={state.vote_average} />
                </DetailVote>
                <ReleaseDate>개봉일&nbsp;&nbsp;{state.release_date}</ReleaseDate>
                <DetailOverview>
                    <Text>줄거리</Text>
                    {state.overview ? <Overview>{state.overview}</Overview> : <Overview2>TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.</Overview2>}
                </DetailOverview>
            </DetailInfo>
        </DetailContainer>
        
    );
}
