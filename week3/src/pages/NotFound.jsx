import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <NotFoundContainer>
      <h1>해당 페이지를 찾지 못했습니다</h1>
      <h3>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h3>
      <div className="toHome" onClick={toHome}>
        메인 페이지로 이동
      </div>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
    background-color: rgb(33, 35, 72);
    height: 580px;
    padding-top: 100px;
    padding-left: 50px;
    color: white;

  
`
