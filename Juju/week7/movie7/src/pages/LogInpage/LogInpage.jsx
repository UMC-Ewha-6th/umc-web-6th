import React from 'react';
import {
    LoginContainer,
    LoginTitle,
    LoginForm,
    InputBox,
    Input,
    ErrorMessage,
    SubmitBox,
    Submit

} from './LogInStyle';
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';

export default function LogInpage() {

    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [userIdError, setUserIdError] = useState('');
    const [userPwError, setUserPwError] = useState('');

    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth();


    useEffect(() => {
        const validateForm = () => {
            if ( userId && userPassword && !userIdError && !userPwError) {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
        };
        validateForm();
    }, [userId, userPassword, userIdError, userPwError]); 


    const onIdChange = (e) => {
        const value = e.target.value;
        setUserId(value);
        if (!value) {
          setUserIdError('아이디를 입력해주세요!');
        } 
        else {
          setUserIdError('');
        }
  
    };

 
    const onPwChange = (e) => {
        const value = e.target.value;
        setUserPassword(value);
        
        var pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
        
        if (!value) {
            setUserPwError('비밀번호를 입력해주세요!');
    
        } else if (value.length < 4) {
            setUserPwError('최소 4자리 이상 입력해주세요!');
    
        } else if (value.length >12){
            setUserPwError('최대 12자리까지 입력 가능합니다!');
    
        } else if (!pwRegex.test(value)){
            setUserPwError('비밀번호는 영어, 숫자, 특수문자를 포함해주세요!');
        }
        else {
              setUserPwError('');
  
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
  
        if (!userId) {
            setUserIdError('아이디를 입력해주세요!');
        }
        if (!userPassword) {
            setUserPwError('비밀번호를 입력해주세요!');
        }
        if (formValid) {
            axios.post('http://localhost:8080/auth/login', { username: userId, password: userPassword })
            .then(response => {
                alert('로그인에 성공했습니다!');
                console.log(response.data);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`; 
                localStorage.setItem('token', response.data.token); // localStorage에 저장함으로써 로그인 유지
                login();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                alert('로그인에 실패했습니다.');
            });
        }
    };

    return(
        <LoginContainer>
            <LoginTitle>로그인 페이지</LoginTitle>
            <LoginForm>
                <form onSubmit={handleSubmit}>
                    <InputBox>
                        <Input type="text" placeholder="아이디" value={userId} onChange={onIdChange}/>
                        {userIdError && <ErrorMessage>{userIdError}</ErrorMessage>}
                    </InputBox>
                    <InputBox>
                        <Input type="password" placeholder="비밀번호" value={userPassword} onChange={onPwChange}/>
                        {userPwError && <ErrorMessage>{userPwError}</ErrorMessage>}
                    </InputBox>
                    <SubmitBox>
                        <Submit type="submit" $formValid={formValid} >로그인</Submit>
                    </SubmitBox>
                </form>
            </LoginForm>
        </LoginContainer>
    );
}