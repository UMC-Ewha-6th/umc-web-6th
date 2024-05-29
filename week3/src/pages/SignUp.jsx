import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';



export default function Signup() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const navigate = useNavigate(); // useHistory 훅 가져오기

  const handleSubmit = async (e) => { // handleSubmit 함수를 비동기로 변경
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', { // 서버에 POST 요청 보내기
        name: name,
        email: email,
        age: age,
        username: id,
        password: password,
        passwordCheck: confirmPassword
      });
      console.log("회원가입 성공:", response.data);
      alert("회원가입이 완료되었습니다!");
      navigate('/login'); // 회원가입 성공 후 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsValidName(value.trim() !== ''); // 이름이 비어있지 않은지 확인
};

const handleIdChange = (e) => {
  const value = e.target.value;
  setId(value);
  setIsValidConfirmPassword(value.trim() !== '');
}

const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value)); // 이메일 유효성 검사
};

const handleAgeChange = (e) => {
  const value = e.target.value;
  setAge(value);
  setIsValidAge(validateAge(value)); // 나이 유효성 검사
};

const handlePasswordChange = (e) => {
  const value = e.target.value;
  setPassword(value);
  setIsValidPassword(validatePassword(value)); // 비밀번호 유효성 검사
};

const handleConfirmPasswordChange = (e) => {
  const value = e.target.value;
  setConfirmPassword(value);
  setIsValidConfirmPassword(password === value); // 비밀번호 확인
};

const validateEmail = (email) => {
    // 간단한 이메일 유효성 검사 로직
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateAge = (age) => {
  const parsedAge = parseInt(age);
  if (isNaN(parsedAge) || parsedAge < 0 || parsedAge % 1 !== 0 || parsedAge < 19) {
    return false;
  }
  return true;
};

const validatePassword = (password) => {
  // 비밀번호 유효성 검사 로직
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;
  return regex.test(password);
};


    return (
        <SignUpContainer>
            <SignUp>
            <p style={{textAlign: "center", fontSize: "25px", color: "white"}}>회원가입 페이지</p><br />
            <form style={{width: "600px"}} onSubmit={handleSubmit}>
                <Form>
                    <Input type = "text" placeholder="이름을 입력해주세요." value = {name} onChange={handleNameChange} />
                </Form>
                <Form>
                    <Input type = "text" placeholder="아이디를 입력해주세요." value = {id} onChange={handleIdChange} />
                </Form>
                <Form>
                    <Input type="email" placeholder="이메일을 입력해주세요." value = {email} onChange={handleEmailChange} />
                    {!isValidEmail && <Small>유효한 이메일을 입력해 주세요!</Small>}
                </Form>
                <Form>
                    <Input type="number" placeholder="나이를 입력해 주세요" value = {age} onChange={handleAgeChange} />
                    {!isValidAge && <Small>유효한 나이를 입력해 주세요!</Small>}
                </Form>
                <Form>
                    <Input type="password" placeholder="비밀번호를 입력해 주세요" value={password} onChange={handlePasswordChange} />
                    {!isValidPassword && <Small>비밀번호는 영어, 숫자, 특수문자를 조합한 4~12자여야 합니다!</Small>}
                </Form>
                <Form>
                    <Input type = "password" placeholder="비밀번호 확인" value = {confirmPassword} onChange={handleConfirmPasswordChange} />
                    {!isValidConfirmPassword && <Small>비밀번호가 일치하지 않습니다</Small>}                        
                </Form>
                <Button type="submit" disabled={!isValidName || !isValidEmail || !isValidAge || !isValidPassword || !isValidConfirmPassword} >제출하기</Button><br/><br/>
            </form>
            <Login>
                <span style={{marginRight: "30px"}}>이미 아이디가 있으신가요?</span>
                <Link to='/login' style={{textDecorationLine: "none", color:"inherit"}}>로그인 페이지로 이동하기</Link>
            </Login>

        </SignUp>
        </SignUpContainer>
    )

}

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(33, 35, 72);
  min-height: 100vh;
`;

const SignUp = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 50px;
  border-radius: 20px;
`;

const Form = styled.div`
  padding-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid #D9D9D9;
  border-radius: 30px;
  padding-left: 10px;
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#FFD400')};
  margin-top: 20px;

  &:focus {
    outline: none;
  }
`;

const Small = styled.small`
  color: red;
  margin-top: 5px;
`;

const Login = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  color: white;
`;
