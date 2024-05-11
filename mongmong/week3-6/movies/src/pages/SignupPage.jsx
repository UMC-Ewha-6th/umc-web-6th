import React, { useEffect } from 'react';
import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isName, setisName] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isAge, setisAge] = useState(false);
  const [ageText, setAgeText] = useState('');
  const [isPW, setisPW] = useState(false);
  const [PWText, setPWText] = useState('');
  const [isPWA, setisPWA] = useState(false);
  const [PWAText, setPWAText] = useState('');
  const [password, setpassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    passwordcheck: '',
  });
  const [isEnable, setisEnable] = useState(false);

  useEffect(() => {
    // Check form validity whenever formData or its dependencies change
    checkFormValidity();
  }, [formData, password]);

  const checkFormValidity = () => {
    // Check all form fields for validity
    const isValid = !isName && !isEmail && !isAge && !isPW && !isPWA &&
      formData.name !== "" && formData.email !== "" && formData.age !== "" &&
      formData.password !== "" && formData.passwordcheck !== "" &&
      formData.password === formData.passwordcheck;

    // Update isEnable state based on form validity
    setisEnable(isValid);
  };

  const handleSubmit = (event) => {
    if (isEnable) {
      event.preventDefault();
      // formData에서 결합된 값을 가져옴
      console.log(formData);
      // API 호출 등 추가 작업 수행
      alert("회원가입에 성공했습니다.");
      navigate(`/`);
    } else {
      alert("다시 시도해주세요");
    }
  };

  function containsAllTypes(inputString) {
    const hasLetter = /[a-zA-Z]/.test(inputString);
    const hasNumber = /\d/.test(inputString);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputString);

    return hasLetter && hasNumber && hasSpecialChar;
  }

  const checkName = (event) => {
      setFormData({ ...formData, name: event.target.value });
      setisName(event.target.value == "");
  }

  const checkEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
    setisEmail(!/@/.test(event.target.value));
  }

  const checkAge = (event) => {
    setFormData({ ...formData, age: event.target.value });
    if (event.target.value == ""){
      setAgeText("나이를 입력해주세요!");
      setisAge(true);
    }
    else if (isNaN(Number(event.target.value))){
      setAgeText("나이는 숫자로 입력해주세요!");
      setisAge(true);
    }
    else if ((Number(event.target.value) < 0)){
      setAgeText("나이는 양수여야 합니다.");
      setisAge(true);
    }
    else if (Number(event.target.value) % 1 != 0){
      setAgeText("나이는 소수로 입력할 수 없습니다.");
      setisAge(true);
    }
    else if (Number(event.target.value) < 19){
      setAgeText("19세 이상만 사용 가능합니다!");
      setisAge(true);
    }
    else
    {
      setisAge(false);
    }
  }

  const checkPW = (event) => {
    setFormData({ ...formData, password: event.target.value });
    setpassword(event.target.value);
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
      setPWText("비밀번호는 영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.");
      setisPW(true);
    }
    else{
      setisPW(false);
    }
  }

  const checkPWA = (event) => {
    setFormData({ ...formData, passwordcheck: event.target.value });
    if (event.target.value == ""){
      setPWAText("비밀번호를 다시 입력해주세요!");
      setisPWA(true);
    }
    else if (event.target.value!= password){
      setPWAText("비밀번호가 일치하지 않습니다.");
      setisPWA(true);
    }
    else{
      setisPWA(false);
    }
  }


  return (
      <SearchContainer>
        <SearchText>회원가입 페이지</SearchText>
        <FormBox>
        <Form onSubmit={handleSubmit}>
          <SearchInput name="name" value={formData.name} placeholder='이름을 입력해주세요' onChange={checkName}/>
          {isName && (
            <WrongText>이름을 입력해주세요!</WrongText>
          )}
          <SearchInput name="email" value={formData.email} placeholder='이메일을 입력해주세요' onChange={checkEmail}/>
          {isEmail && (
            <WrongText>이메일을 입력해주세요!</WrongText>
          )}
          <SearchInput name="age" value={formData.age} placeholder='나이를 입력해주세요' onChange={checkAge}/>
          {isAge && (
            <WrongText>{ageText}</WrongText>
          )}
          <SearchInput type="password" name="password" value={formData.password} placeholder='비밀번호를 입력해주세요' onChange={checkPW}/>
          {isPW && (
            <WrongText>{PWText}</WrongText>
          )}
          <SearchInput type="password" name="passwordcheck" value={formData.passwordcheck}placeholder='비밀번호 확인' onChange={checkPWA}/>
          {isPWA && (
            <WrongText>{PWAText}</WrongText>
          )}
          <Submit style={{ backgroundColor: isEnable ? 'yellow' : 'lightgrey' }} disabled={!isEnable} type='submit'>제출하기</Submit>
        </Form>
        </FormBox>
      </SearchContainer>

  );
};

export default SignupPage;

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
  width: 370px;
  height: 35px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  margin-top: 15px;
`
const Submit = styled.button`
margin-top: 20px;
width: 390px;
height: 35px;
border-radius: 20px;
border: none;
cursor:pointer;
font-weight: bold;
margin-bottom: 280px;
`