import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [idMessage, setIdMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");

  const [isId, setIsId] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);

  //아이디 입력 유효성 검사
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);

    const idRegExp = /^[A-Za-z0-9]+$/;
    const isIdRegExp = idRegExp.test(currentId);

    if (currentId.length == 0) {
      setIdMessage("아이디를 입력해주세요!");
      setIsId(false);
    } else if (!isIdRegExp) {
      setIdMessage("아이디는 알파벳과 숫자의 조합으로 작성해주세요!");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
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

  // Signup 컴포넌트 내의 onSubmit 함수 수정
  const onSubmit = async (e) => {
    // async 키워드 추가
    e.preventDefault();
    if (isId && isPassword) {
      try {
        // 예외 처리 추가
        const response = await axios.post("http://localhost:8080/auth/login", {
          // 서버로 POST 요청
          username: id, // 수정: 백엔드에서는 username으로 사용
          password: password,
        });
        alert("로그인 성공");
        navigate("/"); // 로그인 페이지로 이동
      } catch (error) {
        // 오류 처리
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        console.error("회원가입 오류:", error);
      }
    } else {
      alert("입력 정보를 확인해주세요!");
    }
  };

  return (
    <Container>
      <LoginForm method="POST" id="loginForm" action="/">
        <LoginTitle>로그인 페이지</LoginTitle>

        <LoginInput
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={onChangeId}
        />
        {idMessage && <ErrorMessage>{idMessage}</ErrorMessage>}
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChangePassword}
        />
        {passwordMessage && <ErrorMessage>{passwordMessage}</ErrorMessage>}
        <SubmitButton onClick={onSubmit} disabled={!isId || !isPassword}>
          로그인
        </SubmitButton>
        <LoginWrapper>
          <LoginText>처음이신가요?</LoginText>
          <Signup to="/signup">회원가입 페이지로 이동하기</Signup>
        </LoginWrapper>
      </LoginForm>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬합니다. */
  padding: 16px; /* 위아래 여백을 추가합니다. */
  padding-top: 30vh;
  justify-content: center;
  align-items: center;
  width: 45vw;
  max-width: 550px;
`;

const LoginTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin: 11px 0px 15px 0px;
  font-weight: bold;
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  margin: 11px 0px 11px 0px;
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
const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const LoginText = styled.p`
  font-size: small;
  color: white;
`;
const Signup = styled(NavLink)`
  font-size: small;
  color: white;
  font-weight: bold;
  text-decoration: none;
`;
