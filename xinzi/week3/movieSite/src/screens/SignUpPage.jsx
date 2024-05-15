import React, { useState, useEffect } from "react";
import SignUpInputForm from "../components/SignUpInputForm";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

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
  height: 600px;
  width: 500px;
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

const SubmitButton = styled.button`
  height: 27px;
  width: 270px;
  background-color: ${props => (props.valid ? "rgb(200, 180, 20)" : "grey")};
  color: ${props => (props.valid ? "black" : "white")};
  border-radius: 7px;
  margin: 20px;
  border: none;
`;

const LogInLinkDiv = styled.div`
  display: flex;
  width: 240px;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

const IdExistAsk = styled.span`
  color: white;
  font-size: 11px;
`;

const LogInLink = styled.span`
  color: white;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer; 
`;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [ageMessage, setAgeMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [nameSuccess, setNameSuccess] = useState(false);
  const [idSuccess, setIdSuccess] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [ageSuccess, setAgeSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
  const [valid, setValid] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value) {
      setNameSuccess(true);
      setNameMessage("");
    } else {
      setNameSuccess(false);
      setNameMessage("필수 입력 항목입니다!");
    }
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);
    if (value) {
      setIdSuccess(true);
      setIdMessage("");
    } else {
      setIdSuccess(false);
      setIdMessage("필수 입력 항목입니다!");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && value.includes("@")) {
      setEmailSuccess(true);
      setEmailMessage("");
    } else {
      setEmailSuccess(false);
      setEmailMessage("올바른 이메일 형식이 아닙니다!");
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    if (value && !isNaN(parseInt(value)) && parseInt(value) >= 0 && parseInt(value) >= 19) {
      setAgeSuccess(true);
      setAgeMessage("");
    } else {
      setAgeSuccess(false);
      if (!value) {
        setAgeMessage("필수 입력 항목입니다!");
      } else if (isNaN(parseInt(value))) {
        setAgeMessage("나이는, 숫자를 입력받아야 합니다.");
      } else if (parseInt(value) < 0) {
        setAgeMessage("나이는, 음수가 될 수 없습니다.");
      } else if (parseInt(value) < 19) {
        setAgeMessage("우리 영화 사이트는 19세 이상만 가입 가능합니다.");
      }
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value && value.length >= 4 && value.length <= 12 &&
      /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,12}$/.test(value)) {
      setPasswordSuccess(true);
      setPasswordMessage("");
    } else {
      setPasswordSuccess(false);
      if (!value) {
        setPasswordMessage("필수 입력 항목입니다!");
      } else if (value.length < 4) {
        setPasswordMessage("비밀번호는 4자리 이상이어야 합니다.");
      } else if (value.length > 12) {
        setPasswordMessage("비밀번호는 12자리까지 가능합니다.");
      } else {
        setPasswordMessage("비밀번호는 영어, 숫자, 특수문자를 조합하여야 합니다.");
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value && value === password) {
      setConfirmPasswordSuccess(true);
      setConfirmPasswordMessage("");
    } else {
      setConfirmPasswordSuccess(false);
      setConfirmPasswordMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    setValid(nameSuccess && emailSuccess && ageSuccess && passwordSuccess && confirmPasswordSuccess);
  }, [nameSuccess, emailSuccess, ageSuccess, passwordSuccess, confirmPasswordSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {

      const userData = {
        username: name,
        email: email,
        age: age,
        password: password,
        confirmPassword: confirmPassword
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      console.log(userData);

      openModal();
    }
  };

  const handleModalClose = () => {
    closeModal();
    navigate("/logIn"); // 모달이 닫힐 때 로그인 페이지로 이동
  };

  return (
    <Screen>
    <Wrapper>
      <Header>회원가입</Header>
      <InputDiv>
        <SignUpInputForm
          label="이름"
          type="text"
          value={name}
          placeholder={"이름을 입력해주세요"}
          onChange={handleNameChange}
          message={nameMessage}
          success={nameSuccess}
        />
        <SignUpInputForm
          label="아이디"
          type="text"
          value={id}
          placeholder={"아이디를 입력해주세요"}
          onChange={handleIdChange}
          message={idMessage}
          success={idSuccess}
        />
        <SignUpInputForm
          label="이메일"
          type="text"
          value={email}
          placeholder={"이메일을 입력해주세요"}
          onChange={handleEmailChange}
          message={emailMessage}
          success={emailSuccess}
        />
        <SignUpInputForm
          label="나이"
          type="text"
          value={age}
          placeholder={"나이를 입력해주세요"}
          onChange={handleAgeChange}
          message={ageMessage}
          success={ageSuccess}
        />
        <SignUpInputForm
          label="비밀번호"
          type="password"
          value={password}
          placeholder={"비밀번호를 입력해주세요"}
          onChange={handlePasswordChange}
          message={passwordMessage}
          success={passwordSuccess}
        />
        <SignUpInputForm
          label="비밀번호확인"
          type="password"
          value={confirmPassword}
          placeholder={"비밀번호 확인"}
          onChange={handleConfirmPasswordChange}
          message={confirmPasswordMessage}
          success={confirmPasswordSuccess}
        />
      </InputDiv>
      <div>
        <SubmitButton valid={valid} onClick={handleSubmit}>회원가입</SubmitButton>
      </div>
      <LogInLinkDiv>
        <IdExistAsk>이미 아이디가 있으신가요?</IdExistAsk>
        <LogInLink onClick={() => navigate("/logIn")}>로그인 페이지로 이동하기</LogInLink>
      </LogInLinkDiv>
      </Wrapper>
      {showModal && <Modal closeModal={handleModalClose} />}
    </Screen>
  );
};

export default SignUpPage;
