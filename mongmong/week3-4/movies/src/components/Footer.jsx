import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>다른코드 많이 참고</FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 30px;
  background-color: rgb(21, 30, 63);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
`
const FooterContent = styled.p`
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`