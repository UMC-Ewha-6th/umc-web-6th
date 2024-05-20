import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogInInputForm from "../components/LogInInputForm";
import axios from "axios";

const Screen = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  width: 400px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 15px;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginButton = styled.button`
  height: 27px;
  width: 270px;
  background: rgb(200, 180, 20);
  border-radius: 7px;
  margin: 20px;
  border: none;
`;

const LogInPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = {
      username: id,
      password: password,
    };

    axios.post('http://localhost:8080/auth/login', formData)
      .then(response => {
        window.localStorage.setItem("token", response.data.token);
        navigate('/');
        console.log(response);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });  
  };

  return (
    <Screen>
      <Wrapper>
        <Header>로그인</Header>
        <InputDiv>
          <LogInInputForm
            label="ID"
            type="text"
            value={id}
            onChange={handleIdChange}
          />
          <LogInInputForm
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputDiv>
        <div>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </div>
      </Wrapper>
    </Screen>
  );
};

export default LogInPage;
