import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birth, setBirth] = React.useState("");

  // 오류메세지 상태 저장
  const [nameMessage, setNameMessage] = React.useState("");
  const [idMessage, setIdMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [birthMessage, setBirthMessage] = React.useState("");
  const [serverErrorMessage, setServerErrorMessage] = React.useState(""); // 서버 에러 메시지 상태 변수

  // 유효성 검사
  const [isName, setIsName] = React.useState(false);
  const [isId, setIsId] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isBirth, setIsBirth] = React.useState(false);

  //이름 입력 유효성 검사
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

  //아이디 입력 유효성 검사
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);

    const idRegExp = /^[A-Za-z0-9]+$/;
    const isIdRegExp = idRegExp.test(currentId);

    if (currentId.length < 5) {
      setIdMessage("아이디는 최소 5자리 이상으로 구성해주세요!");
      setIsId(false);
    } else if (!isIdRegExp) {
      setIdMessage("아이디는 알파벳과 숫자의 조합으로 작성해주세요!");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };

  //이메일 입력 유효성 검사
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9]*[@][A-Za-z0-9.]*$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  // 나이 입력 유효성 검사
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

  //비밀번호 입력 유효성 검사
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

  //비밀번호 확인 유효성 검사
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

  const navigate = useNavigate();

  // Signup 컴포넌트 내의 onSubmit 함수 수정
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      isName &&
      isId &&
      isEmail &&
      isBirth &&
      isPassword &&
      isPasswordConfirm
    ) {
      try {
        const response = await axios.post("http://localhost:8080/auth/signup", {
          name: name,
          username: id, // username으로 수정
          email: email,
          age: birth,
          password: password,
          passwordCheck: passwordConfirm, // passwordCheck로 수정
        });
        alert("회원가입이 성공했습니다!");
        navigate("/login");
      } catch (error) {
        if (error.response && error.response.data) {
          console.error("서버 응답 메시지:", error.response.data.message);
        } else {
          console.error("회원가입 오류:", error);
        }
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
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
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={onChangeId}
        />
        {idMessage && <ErrorMessage>{idMessage}</ErrorMessage>}
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
        {serverErrorMessage && (
          <ErrorMessage>{serverErrorMessage}</ErrorMessage>
        )}
        <SubmitButton
          onClick={onSubmit}
          disabled={
            !isName || !isEmail || !isBirth || !isPassword || !isPasswordConfirm
          }
        >
          제출하기
        </SubmitButton>
        <LoginWrapper>
          <LoginText>이미 아이디가 있으신가요?</LoginText>
          <Login to="/login">로그인 페이지로 이동하기</Login>
        </LoginWrapper>
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
  padding-top: 60px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

const SignupForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬합니다. */
  padding: 16px; /* 위아래 여백을 추가합니다. */
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    //작은 스마트폰
    width: 60vw;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    width: 50vw;
  }

  @media (min-width: 769px) and (max-width: 1279px) {
    //큰 테블릿, 작은 데스크톱
    width: 45vw;
    max-width: 450px;
  }

  @media (min-width: 1280px) {
    //큰 데스크톱, 모니터
    width: 45vw;
    max-width: 450px;
  }
`;

const SignupTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin: 11px 0px 15px 0px;
  font-weight: bold;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 1.2rem;
  }
`;

const SignupInput = styled.input`
  box-sizing: border-box;
  border-radius: 40px;
  &::placeholder {
    color: gray;
    @media (max-width: 480px) {
      //작은 스마트폰
      font-size: 0.7rem;
    }
  }
  padding-inline-start: 30px;
  @media (max-width: 480px) {
    //작은 스마트폰
    height: 35px;
    width: 100%;
    margin: 7px 0px 7px 0px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    height: 40px;
    width: 100%;
    margin: 9px 0px 9px 0px;
  }

  @media (min-width: 769px) {
    height: 45px;
    width: 100%;
    margin: 11px 0px 11px 0px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin: 20px 0px 20px 0px;
  border-radius: 40px;
  @media (max-width: 480px) {
    //작은 스마트폰
    height: 40px;
    width: 100%;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    height: 45px;
    width: 100%;
  }

  @media (min-width: 769px) {
    height: 50px;
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: left;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 0.6rem;
  }
`;
const LoginWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    //작은 스마트폰
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    height: 30px;
    justify-content: space-between;
    padding-right: 20px;
    box-sizing: border-box;
  }
  @media (min-width: 769px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const LoginText = styled.p`
  font-size: small;
  color: white;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 0.7rem;
  }
`;
const Login = styled(NavLink)`
  font-size: small;
  color: white;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 0.7rem;
  }
`;
