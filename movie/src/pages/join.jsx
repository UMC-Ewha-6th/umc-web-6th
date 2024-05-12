import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const Container = styled.div`
  color: white;
  width: 100vw;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 450px;
  height: 35px;
  font-size: 13px;
  border: transparent;
  border-radius: 18px;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.input`
  width: 465px;
  height: 45px;
  border: transparent;
  border-radius: 22px;
  background-color: ${props => (props.$isValid ? '#e5b409' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  gap: 20px;
  color: white;
  font-size: 14px;
  margin-top: 25px;
`;

const Text = styled.div``;

const NavLink = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: white;
`;

const ShowMsg = styled.div`
  width: 445px;
  font-size: 12px;
  color: ${props => (props.$isError ? 'green' : 'red')};
`;

/*JoinPage컴포넌트 속에 있으면, JoinPage컴포넌트가 렌더링될 때마다, 새로 생성되어 input내 입력이 자꾸 초기화됨*/
const InputBox = ({ placeholder, type, value, setValue }) => {
  const inputChange = e => {
    setValue(e.target.value);
  };
  return <Input placeholder={placeholder} value={value} onChange={inputChange} type={type} />;
};

export default function JoinPage() {
  //기본
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();
  const [pwd, setPwd] = useState('');
  const [rePwd, setRePwd] = useState('');

  //유효성여부
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isRePwd, setIsRePwd] = useState(false);

  //에러 메시지
  const [nameMsg, setNameMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [ageMsg, setAgeMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [rePwdMsg, setRePwdMsg] = useState('');

  //버튼 색
  const [isValid, setIsValid] = useState(false);

  //유효성 검사
  const isValidName = name => {
    if (name.trim() == '') {
      setNameMsg('이름을 입력해주세요!');
      setIsName(false);
      setIsValid(false);
    } else {
      setNameMsg('올바른 이름 형식입니다!');
      setIsName(true);
    }
  };

  //이메일
  const isValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setEmailMsg('올바른 이메일 형식입니다!');
      setIsEmail(true);
    } else {
      setEmailMsg('올바른 이메일 형식이 아닙니다!');
      setIsEmail(false);
      setIsValid(false);
    }
  };

  //나이
  const isValidAge = age => {
    const re = /^[1-9]\d*$/;
    if (age >= 19 && re.test(age)) {
      setAgeMsg('올바른 나이 형식입니다!');
      setIsAge(true);
    } else {
      if (age < 0) {
        setAgeMsg('나이는 양수여야 합니다.');
      } else if (age % 1 !== 0 && !isNaN(age)) setAgeMsg('나이를 실수로 입력할 수 없습니다.');
      else if (age < 19) setAgeMsg('19세 이상이어야 합니다!');
      else setAgeMsg('나이는 숫자로 입력해주세요!');
      setIsAge(false);
      setIsValid(false);
    }
  };

  //비밀번호
  const isValidPwd = pwd => {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    if (re.test(pwd)) {
      setPwdMsg('올바른 비밀번호입니다!');
      setIsPwd(true);
    } else {
      setPwdMsg('올바른 비밀번호가 아닙니다!');
      setIsPwd(false);
      setIsValid(false);
    }
  };

  //비밀번호 확인
  const checkPwdMatch = (pwd, rePwd) => {
    if (pwd !== rePwd || pwd.trim() == '') {
      setRePwdMsg('비밀번호가 일치하지 않습니다.');
      setIsRePwd(false);
      setIsValid(false);
    } else {
      setRePwdMsg('비밀번호가 일치합니다');
      setIsRePwd(true);
    }
  };

  useEffect(() => {
    isValidName(name);
    isValidEmail(email);
    isValidAge(age);
    isValidPwd(pwd);
    checkPwdMatch(pwd, rePwd);

    if (isName && isEmail && isAge && isPwd && isRePwd) {
      setIsValid(true);
    }
  }, [name, email, age, pwd, rePwd, isName, isEmail, isAge, isPwd, isRePwd]);

  const formData = {
    name: { name },
    email: { email },
    age: { age },
    pwd: { pwd },
    rePwd: { rePwd },
  };

  const navigate = useNavigate();
  const onClickBtn = e => {
    e.preventDefault();

    if (isValid) {
      console.log(formData);
      navigate('/login');
    }
  };

  return (
    <Container>
      <Title>회원가입 페이지</Title>
      <Form>
        <Part>
          <InputBox placeholder="이름을 입력해주세요" value={name} setValue={setName} type="text" />
          <ShowMsg $isError={isName}>{nameMsg}</ShowMsg>
        </Part>
        <Part>
          <InputBox placeholder="이메일을 입력해주세요" value={email} setValue={setEmail} type="text" />
          <ShowMsg $isError={isEmail}>{emailMsg}</ShowMsg>
        </Part>
        <Part>
          <InputBox placeholder="나이를 입력해주세요" value={age} setValue={setAge} type="text" />
          <ShowMsg $isError={isAge}>{ageMsg}</ShowMsg>
        </Part>
        <Part>
          <InputBox placeholder="비밀번호를 입력해주세요" value={pwd} setValue={setPwd} type="password" />
          <ShowMsg $isError={isPwd}>{pwdMsg}</ShowMsg>
        </Part>
        <Part>
          <InputBox placeholder="비밀번호 확인" value={rePwd} setValue={setRePwd} type="password" />
          <ShowMsg $isError={isRePwd}>{rePwdMsg}</ShowMsg>
        </Part>
      </Form>
      <Btn type="submit" onClick={onClickBtn} value={'제출하기'} $isValid={isValid} />
      <TextBox>
        <Text>이미 아이디가 있으신가요?</Text>
        <NavLink to={'/login'}>로그인페이지로 이동하기</NavLink>
      </TextBox>
    </Container>
  );
}
