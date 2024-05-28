import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [idMessage, setIdMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");

  const [isId, setIsId] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const navigate = useNavigate();

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
        console.log("로그인 성공:", response.data);
        localStorage.setItem("token", response.data.token);
        console.log("이름:", response.data.username);
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
        <SignupWrapper>
          <SignupText>처음이신가요?</SignupText>
          <Signup to="/signup">회원가입 페이지로 이동하기</Signup>
        </SignupWrapper>
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
  padding-top: 60px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

const LoginForm = styled.form`
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

const LoginTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin: 11px 0px 15px 0px;
  font-weight: bold;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 1.2rem;
  }
`;

const LoginInput = styled.input`
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
  margin: 20px 0px;
  border-radius: 40px;

  :disabled {
    background-color: gray; /* 비활성화 상태일 때 회색으로 설정 */
  }

  &:not(:disabled) {
    background-color: #edcf3a;
  }
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
const SignupWrapper = styled.div`
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

const SignupText = styled.p`
  font-size: small;
  color: white;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 0.7rem;
  }
`;
const Signup = styled(NavLink)`
  font-size: small;
  color: white;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 0.7rem;
  }
`;
