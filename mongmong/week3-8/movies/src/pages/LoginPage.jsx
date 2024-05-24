import React, { useEffect } from 'react';
import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isID, setisID] = useState(false);
  const [isPW, setisPW] = useState(false);
  const [PWText, setPWText] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isEnable, setisEnable] = useState(false);

  // 로그인 성공 시 토큰을 받아서 로컬 스토리지에 저장하는 함수
  const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
  };

  useEffect(() => {
    // Check form validity whenever formData or its dependencies change
    checkFormValidity();
  }, [formData]);

  const checkFormValidity = () => {
    // Check all form fields for validity
    const isValid = !isID && !isPW 
    && formData.username !== "" && formData.password !== "";
    // Update isEnable state based on form validity
    setisEnable(isValid);
  };

  function containsAllTypes(inputString) {
    const hasBigLetter = /[A-Z]/.test(inputString);
    const hasSmallLetter = /[a-z]/.test(inputString);
    const hasNumber = /\d/.test(inputString);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputString);

    return hasBigLetter && hasSmallLetter && hasNumber && hasSpecialChar;
  }

  const handleSubmit = async (event) => {
    if (isEnable) {
      event.preventDefault();
      
      console.log(formData);
      // API 호출 등 추가 작업 수행
      try {
        const response = await axios.post('http://localhost:8080/auth/login', formData);
        console.log('Response:', response.data);
        saveTokenToLocalStorage(response.data.token);
        console.log('Token:', response.data.token);
        alert("로그인에 성공했습니다.");
        navigate(`/`);
      } catch (error) {
        console.error('Error:', error);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("다시 시도해주세요");
    }
  };

  const checkID = (event) => {
    setFormData({ ...formData, username: event.target.value.toString() });
    if (event.target.value.length < 5){
      setisID(true);
    }
    else
    {
      setisID(false);
    }
  }

  const checkPW = (event) => {
    setFormData({ ...formData, password: event.target.value.toString() });
    if (event.target.value == ""){
      setPWText("비밀번호를 입력해주세요!");
      setisPW(true);
    }
    else if (event.target.value.length < 4){
      setPWText("비밀번호는 최소 4자리 이상이어야 합니다!");
      setisPW(true);
    }
    else if (event.target.value.length > 12){
      setPWText("비밀번호는 최대 12자리까지 가능합니다!");
      setisPW(true);
    }
    else if (!containsAllTypes(event.target.value)){
      setPWText("비밀번호는 대소문자, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.");
      setisPW(true);
    }
    else{
      setisPW(false);
    }
  }

  return (
      <SearchContainer>
        <Navbar/>
        <SearchText>로그인 페이지</SearchText>
        <FormBox>
        <Form onSubmit={handleSubmit}>
          <SearchInput name="id" value={formData.id} placeholder='아이디' onChange={checkID}/>
          {isID && (
            <WrongText>아이디는 최소 5자리 이상 입력해주세요!</WrongText>
          )}
          <SearchInput type="password" name="password" value={formData.password} placeholder='비밀번호'onChange={checkPW}/>
          {isPW && (
            <WrongText>{PWText}</WrongText>
          )}
          <Submit style={{ backgroundColor: isEnable ? 'gold' : 'lightgrey' }} disabled={!isEnable} type='submit'>로그인하기</Submit>
        </Form>
        </FormBox>
      </SearchContainer>

  );
};

export default LoginPage;

const FormBox = styled.div`
justify-content: center;
  align-items: center;
`

const Form = styled.form`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  left: 0;
  width: 100%;
`

const WrongText = styled.p`
  align-items: left;
  justify-content: none;
  color:red;
  font-size: 12px;
  margin-left: 10px;
`

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
`



const SearchContainer = styled(BannerContainer)`
  background: rgb(26, 35, 78);
  flex-direction: column;
`

const SearchText = styled.h4`
  color: white;
  font-size: 17px;
  margin-top: 40px;
  margin-bottom: 40px;
`

const SearchInput = styled.input`
  width: 280px;
  height: 35px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  margin-top: 15px;
`
const Submit = styled.button`
margin-top: 40px;
width: 300px;
height: 35px;
border-radius: 20px;
border: none;
cursor:pointer;
font-weight: bold;
margin-bottom: 400px;
`