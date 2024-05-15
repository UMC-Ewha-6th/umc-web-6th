import React, { useState } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: rgb(20, 20, 50);
  z-index: 999;
`;

const Footer = () => {

  return (
    <FooterWrapper></FooterWrapper>
  );
};

export default Footer;
