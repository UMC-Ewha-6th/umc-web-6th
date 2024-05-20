import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: rgb(35, 35, 70);
        position: fixed;
        left: 0px;
        top: 0px;
    `;

    const ContentWrapper = styled.div`
        display: flex;
        flex-direction: column;
        height: calc(100% - 80px);
        width: 100%;
        overflow-y: auto;
        align-items: center;
        position: relative;
        top: 40px;

        /* 스크롤바 스타일 */
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #2f3542;
            border-radius: 8px;
            background-clip: padding-box;
            border: 1.5px solid transparent;
        }
        &::-webkit-scrollbar-track {
            background-color: grey;
            border-radius: 8px;
            box-shadow: inset 0px 0px 4px white;
        }
    `;

const RootLayout = ({ children }) => {

    return (
        <Wrapper>
            <Navbar />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer />
        </Wrapper>
    );
};

export default RootLayout;
