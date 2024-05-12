import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  width: 100vw;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
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
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;

const InputBox = ({ placeholder, type, value, setValue }) => {
  const inputChange = e => {
    setValue(e.target.value);
  };
  return <Input placeholder={placeholder} value={value} onChange={inputChange} type={type} />;
};

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onClickBtn = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>로그인 페이지</Title>
      <InputBox placeholder="아이디" value={id} setValue={setId} type="text" />
      <InputBox placeholder="비밀번호" value={pwd} setValue={setPwd} type="password" />
      <Btn type="submit" onClick={onClickBtn} value={'제출하기'} />
    </Container>
  );
}
