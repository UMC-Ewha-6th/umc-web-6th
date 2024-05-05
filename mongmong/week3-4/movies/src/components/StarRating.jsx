import React from 'react';
import styled from 'styled-components';

const StarRating = ({ voteAverage }) => {
  // Get the integer part of the rating (number of full stars)
  const fullStars = Math.floor(voteAverage);

  // Array to hold the JSX elements for full stars
  const fullStarsArray = Array(fullStars).fill().map((_, index) => <Star key={`full-star-${index}`}>⭐</Star>);
  return (
    <StarContainer>
      <span>평점 </span>
      {fullStarsArray}
    </StarContainer>
  );
};

export default StarRating;

const StarContainer = styled.div`
  grid-template-columns: repeat(10, 1fr); // Assuming max rating is 8
  display: inline-block;
  width: 50%; /* Adjust the width as needed */
  box-sizing: border-box; /* Include padding and border in the width */
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: bold;
`;

const Star = styled.span`
  font-size: 16px;
`;