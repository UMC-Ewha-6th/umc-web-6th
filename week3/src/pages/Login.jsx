import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios 추가
import styled from 'styled-components';

export default function Signup() {
  const [username, setUsername] = useState(''); // 이름을 username으로 변경
  const [password, setPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { // 로그인 요청 보내기
        username,
        password
      });
      console.log("로그인 성공:", response.data);
      // 토큰 저장하기
      localStorage.setItem('token', response.data.token);
      alert("로그인이 완료되었습니다!");
      navigate('/'); // 로그인 성공 후 메인 페이지로 이동
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsValidUsername(value.trim() !== ''); // 입력값이 공백이 아니면 유효함
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsValidPassword(value.trim() !== ''); // 입력값이 공백이 아니면 유효함
  };

  return (
    <LoginContainer>
      <LoginBox>
        <p style={{ textAlign: "center", fontSize: "25px", color: "white" }}>로그인 페이지</p><br />
        <form style={{ width: "600px" }} onSubmit={handleSubmit}>
          <Form>
            <Input type="text" placeholder="아이디" value={username} onChange={handleUsernameChange} />
            {!isValidUsername && <Small>아이디를 입력해주세요!</Small>}
          </Form>
          <Form>
            <Input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
            {!isValidPassword && <Small>비밀번호를 입력해주세요!</Small>}
          </Form>
          <Button type="submit" disabled={!isValidUsername || !isValidPassword}>로그인</Button><br /><br />
        </form>
        <Login>
          <span style={{ marginRight: "30px" }}>아직 회원이 아니신가요?</span>
          <Link to='/signup' style={{ textDecorationLine: "none", color: "inherit" }}>회원가입 페이지로 이동하기</Link>
        </Login>
      </LoginBox>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: 670px;
  flex-wrap: wrap;
`

const LoginBox = styled.div`
  width: 600px;
  display: block;
  margin: 0 auto;
  margin-top: 5%;
`;

const Form = styled.div`
  padding-bottom: 15px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  border: 2px solid #D9D9D9;
  margin-left: 100px;
  border-radius: 30px;
  padding-left: 10px;

  -webkit-appearance: none; /* Chrome, Safari, Opera */
  appearance: none; /* Standard syntax */

  /* 내부 스핀 버튼 숨기기 */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 420px;
  height: 40px;
  border-radius: 30px;
  background-color: ${({ disabled }) => (disabled ? 'white' : '#FFD400')};
  margin-top: 20px;

`;

const Small = styled.small`
  color: red;
  margin-left: 100px
`;

const Login = styled.div`
  margin-left: 100px;
  color: white;
`
