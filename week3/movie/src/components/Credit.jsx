import React from "react";
import styled from "styled-components";

const CastWrapper = styled.div`
  display: flex;
  height: 110px;
  width: 90px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Profile = styled.img`
  display: flex;
  height: 70px;
  width: 45px;
  object-fit: cover;
  border-radius: 50px;
  margin-bottom: 14px;
`;

const Name = styled.span`
  font-size: 10px;
  color: white;
  text-align: center;
`;

const defaultImageSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

const Cast = ({ name, profile_path }) => {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : defaultImageSrc;

  return (
    <CastWrapper>
      <Profile src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </CastWrapper>
  );
};

export default Cast;
