import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 94.3%;
  width: 89%;
  padding: 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
  font-size: 13px;
  color: white;
`;

const Overview = styled.p`
  height: 270px;
  font-size: 13px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieDetail = ({ title, overview }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Wrapper>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDetail;
