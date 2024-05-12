import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  width: ${props => (props.$isSmall ? '238px' : '300px')};
  height: ${props => (props.$isSmall ? '450px' : '550px')};
  border: transparent;
  border-radius: 5px;
  background-color: rgb(48, 63, 123);
  cursor: pointer;
  position: relative;
  color: white;
`;

const MovieImg = styled.img`
  width: 100%;
  border: transparent;
  border-radius: 5px 5px 0px 0px;
`;

const MovieText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const TextBox = styled.div`
  width: 90%;
  display: flex;
`;

const Title = styled.div`
  width: ${props => (props.$isSmall ? '150px' : '200px')};
  font-size: ${props => (props.$isSmall ? '10px ' : '15px')};
`;

const Star = styled.div`
  width: ${props => (props.$isSmall ? '50px' : '60px')};
  font-size: ${props => (props.$isSmall ? '11px ' : '15px')};
  display: flex;
  justify-content: flex-end;
`;

const ExplainBox = styled.div`
  width: ${props => (props.$isSmall ? '238px' : '300px')};
  height: ${props => (props.$isSmall ? '450px' : '550px')};
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  color: white;
  position: absolute;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    display: block;
    opacity: 100;
  }
`;

const ExplainTitle = styled.div`
  margin: ${props => (props.$isSmall ? '20px 0 20px 10px' : '40px 0 40px 20px')};
  font-size: ${props => (props.$isSmall ? '13px ' : '17px')};
  font-weight: 600;
`;

const ExplainPosition = styled.div`
  width: ${props => (props.$isSmall ? '238px' : '300px')};
  display: flex;
  justify-content: center;
`;

const Explain = styled.div`
  width: 90%;
  font-size: ${props => (props.$isSmall ? '11px' : '15px')};
`;

export default function MovieBox({ link, movieImage, title, overview, star, isSmall }) {
  return (
    <NavLink to={link} state={{ title: title }}>
      <Container $isSmall={isSmall}>
        <ExplainBox $isSmall={isSmall}>
          <ExplainTitle $isSmall={isSmall}>{title}</ExplainTitle>
          <ExplainPosition $isSmall={isSmall}>
            <Explain $isSmall={isSmall}>{overview}</Explain>
          </ExplainPosition>
        </ExplainBox>
        <MovieImg src={movieImage} alt={title} className="movie_image" />
        <MovieText>
          <TextBox>
            <Title $isSmall={isSmall}>{title}</Title>
            <Star $isSmall={isSmall}>⭐{star}</Star>
          </TextBox>
        </MovieText>
      </Container>
    </NavLink>
  );
}
