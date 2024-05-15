import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {

    const Wrapper = styled.div`
        display: flex;
        height: 100vh;
        width: 100vw;
        background-color: rgb(35, 35, 70);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0px;
        left: 0px;
    `;

    const Alert = styled.span`
        //display: flex;
        color: white;
        font-size: 15px;
    `;

    const Text = styled.p`
        //display: flex;
        color: white;
        font-size: 15px;
    `;

    return (
        <Wrapper>
            <Alert>페이지를 찾을 수 없습니다.</Alert>
            <Text>메인 페이지로 돌아가려면 아래 링크를 클릭하세요.</Text>
            <Link to="/">메인 페이지로 이동</Link>
        </Wrapper>
    );
};

export default NotFound;
