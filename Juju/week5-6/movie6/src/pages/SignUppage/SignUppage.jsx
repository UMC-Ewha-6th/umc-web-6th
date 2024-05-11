import React from 'react';
import {
    Container,
    Input,
    ErrorMessage,
    Submit,
    SignupTitle,
    SignupForm,
    InputBox,
    SubmitBox,
    Bottom,
    Item1,
    Item2
  
} from './SignupStyle';
import { useState, useEffect} from "react";


export default function SignUppage() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
  
    const [fullnameError, setFullnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [pwConfirmError, setPwConfirmError] = useState('');
    
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            if (fullname && email && age && password && pwConfirm &&
                !fullnameError && !emailError && !ageError && !passwordError && !pwConfirmError) {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
        };
        validateForm();
    }, [fullname, email, age, password, pwConfirm, fullnameError, emailError, ageError, passwordError, pwConfirmError]);


    const onNameChange = (e) => {
      const value = e.target.value;
      setFullname(value);
      if (!value) {
        setFullnameError('이름을 입력해주세요!');
      } 
      else {
        setFullnameError('');
      }

    };

  
    const onEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      var emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      if (!value){
          setEmailError('이메일을 입력해주세요!');
      }
      else if (!emailRegex.test(value)){
          setEmailError('이메일 형식에 맞게 다시 입력해주세요!');
      }
      else {
          setEmailError('');
      }
    };
  
    const onAgeChange = (e) => {
      const value = e.target.value;
      setAge(value);
      if (!value){
        setAgeError('나이를 입력해주세요!');
  
    } else if(isNaN(value) === true){
        setAgeError('나이는 숫자로 입력해주세요!');
    }
    else if (value < 0){
        setAgeError('나이는 양수여야합니다!');
  
    } else if (value % 1 !== 0){
        setAgeError('나이를 실수로 입력할 수 없습니다!');
  
    } else if (value < 19){
        setAgeError('19세 이상만 사용 가능합니다!');
  
    } else {
        setAgeError('');
    }
    }
  
    const onPasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      
      var pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
      
      if (!value) {
          setPasswordError('비밀번호를 입력해주세요!');
  
      } else if (value.length < 4) {
          setPasswordError('최소 4자리 이상 입력해주세요!');
  
      } else if (value.length >12){
          setPasswordError('최대 12자리까지 입력 가능합니다!');
  
      } else if (!pwRegex.test(value)){
          setPasswordError('비밀번호는 영어, 숫자, 특수문자를 포함해주세요!');
      }
      else {
            setPasswordError('');

      }
    };
  
    const onPwConfirmChange = (e) => {
      const value = e.target.value;
      setPwConfirm(value);
      if (!value) {
          setPwConfirmError('비밀번호를 다시 입력해주세요!');

  
      } else if (value !== password) {
          setPwConfirmError('비밀번호가 일치하지 않습니다!');
  
      } 
      else {
          setPwConfirmError('');
      }
    };

    const formData = {
        name: { name },
        email: { email },
        age: { age },
        password: { password },
        pwConfirm: { pwConfirm },
      };
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        if (!fullname) {
            setFullnameError('이름을 입력해주세요!');
        }
        if (!email) {
            setEmailError('이메일을 입력해주세요!');
        }
        if(!age){
            setAgeError('나이를 입력해주세요!');
        }
        if (!password) {
            setPasswordError('비밀번호를 입력해주세요!');
        }
        if (!pwConfirm) {
            setPwConfirmError('비밀번호를 다시 입력해주세요!');
        }
        if (formValid) {
            alert("회원가입에 성공하였습니다!");
            console.log(formData);
        }


    };
  
    return (
      <Container>
        <SignupTitle>회원가입 페이지</SignupTitle>
        <SignupForm>
            <form onSubmit={handleSubmit}>
                <InputBox>
                    <Input type="text" placeholder="이름을 입력해주세요" value={fullname} onChange={onNameChange} />
                    {fullnameError && <ErrorMessage>{fullnameError}</ErrorMessage>}
                </InputBox>
                <InputBox>
                    <Input type="email" placeholder="이메일을 입력해주세요" value={email} onChange={onEmailChange} />
                    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
                </InputBox>
                <InputBox>
                    <Input type="age" placeholder="나이를 입력해주세요" value={age} onChange={onAgeChange} />
                    {ageError && <ErrorMessage>{ageError}</ErrorMessage>}
                </InputBox>       
                <InputBox>
                    <Input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onPasswordChange} />
                    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                </InputBox>
                <InputBox>
                    <Input type="password" placeholder="비밀번호 확인" value={pwConfirm} onChange={onPwConfirmChange} />
                    {pwConfirmError && <ErrorMessage>{pwConfirmError}</ErrorMessage>}
                </InputBox>
                <SubmitBox>
                    <Submit type="submit" style={{ backgroundColor: formValid ? 'yellow' : 'white' }} >가입하기</Submit>

                </SubmitBox>
            </form>
        </SignupForm>
        <Bottom>
            <Item1>이미 아이디가 있으신가요?</Item1>
            <Item2>로그인 페이지로 이동하기</Item2>
        </Bottom>
      </Container>
    );
}