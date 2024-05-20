import React from "react";
import styled from "styled-components";

const StarRatingWrapper = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  font-size: 1em;
  color: ${props => (props.$filled ? "yellow" : "gray")};
`;

const StarRating = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    stars.push(
      <Star
        key={i}
        $filled={i < value}
      >
        &#9733;
      </Star>
    );
  }

  return <StarRatingWrapper>{stars}</StarRatingWrapper>;
};

export default StarRating;
