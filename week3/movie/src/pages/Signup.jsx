import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birth, setBirth] = React.useState("");

  // 오류메세지 상태 저장
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [birthMessage, setBirthMessage] = React.useState("");

  // 유효성 검사
  const [isName, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isBirth, setIsBirth] = React.useState(false);

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    const onlyLettersRegex = /^[a-zA-Z가-힣]+$/;
    const isOnlyLetters = onlyLettersRegex.test(currentName);

    if (!isOnlyLetters) {
      setNameMessage("이름을 입력해주세요!");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9]*[@][A-Za-z0-9]*$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;

    if (currentPassword.length < 4) {
      setPasswordMessage("비밀번호는 최소 4자리 이상이어야 합니다.");
      setIsPassword(false);
    } else if (currentPassword.length > 12) {
      setPasswordMessage("비밀번호는 최대 12자리까지 가능합니다.");
      setIsPassword(false);
    } else if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeBirth = (e) => {
    const currentBirth = e.target.value;
    setBirth(currentBirth);
    const age = parseInt(currentBirth);

    if (isNaN(age)) {
      setBirthMessage("나이는, 숫자를 입력해야 합니다.");
      setIsBirth(false);
    } else if (age < 0) {
      setBirthMessage("나이는, 음수가 될 수 없습니다.");
      setIsBirth(false);
    } else if (age % 1 !== 0) {
      setBirthMessage("나이는, 소수가 될 수 없습니다.");
      setIsBirth(false);
    } else if (age < 19) {
      setBirthMessage("우리 영화 사이트는, 19살 이상만 가입이 가능합니다.");
      setIsBirth(false);
    } else {
      setBirthMessage("");
      setIsBirth(true);
    }
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    if (isName && isEmail && isBirth && isPassword && isPasswordConfirm) {
      // 모든 유효성 검사가 통과할 경우에만 제출
      console.log("회원가입 정보:", {
        name,
        email,
        birth,
        password,
        passwordConfirm,
      });
      alert("회원가입이 성공했습니다!");
      navigate("/");
      // 여기에 회원가입을 서버로 보내는 로직을 추가할 수 있습니다.
    } else {
      // 유효성 검사를 통과하지 못한 경우 에러 메시지를 표시
      alert("입력 정보를 확인해주세요!");
    }
  };
  return (
    <Container>
      <SignupForm method="POST" id="signupForm" action="/">
        <SignupTitle>회원가입 페이지</SignupTitle>
        <SignupInput
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={onChangeName}
        />
        {nameMessage && <ErrorMessage>{nameMessage}</ErrorMessage>}

        <SignupInput
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={onChangeEmail}
        />
        {emailMessage && <ErrorMessage>{emailMessage}</ErrorMessage>}
        <SignupInput
          placeholder="나이를 입력해주세요"
          value={birth}
          onChange={onChangeBirth}
        />
        {birthMessage && <ErrorMessage>{birthMessage}</ErrorMessage>}
        <SignupInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChangePassword}
        />
        {passwordMessage && <ErrorMessage>{passwordMessage}</ErrorMessage>}
        <SignupInput
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        {passwordConfirmMessage && (
          <ErrorMessage>{passwordConfirmMessage}</ErrorMessage>
        )}
        <SubmitButton
          onClick={onSubmit}
          disabled={
            !isName || !isEmail || !isBirth || !isPassword || !isPasswordConfirm
          }
        >
          제출하기
        </SubmitButton>
      </SignupForm>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SignupForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬합니다. */
  padding: 16px; /* 위아래 여백을 추가합니다. */
  padding-top: 120px;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

const SignupTitle = styled.h2`
  color: white;
`;

const SignupInput = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  margin: 15px 0px 15px 0px;
  border-radius: 40px;
  &::placeholder {
    color: gray;
  }
  padding-inline-start: 30px;
`;

const SubmitButton = styled.button`
  height: 50px;
  width: 100%;
  margin: 20px 0px 20px 0px;
  border-radius: 40px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: left;
`;
