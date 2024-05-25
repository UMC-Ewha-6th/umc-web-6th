import styled from "styled-components";

export const LoginContainer = styled.div`
`;

export const LoginTitle = styled.div`
color ; white;
font-weight : bold;
padding-top : 120px;
font-size : 20px;
text-align: center;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    font-size : 15px;
}


`;

export const Input = styled.input`
width : 500px;
height : 40px;
border-radius : 25px;
margin-bottom : 20px;
font-size : 15px;
font-family: var(--font);
color: black;
padding-left : 18px;

@media (max-width: 768px) {
    width : 390px;
    font-size : 13px;
  }

@media (max-width: 480px) {
    width : 300px;
    font-size : 13px;
}
`;

export const ErrorMessage = styled.div`
color: red;
font-size : 13px;
margin-left : 10px;
margin-bottom : 13px;

@media (max-width: 480px) {
  font-size : 12px;
}
`;

export const InputBox = styled.div`
`;

export const LoginForm = styled.div`
margin-top : 40px;
display: flex; 
justify-content: center; 
align-items: center;
flex-direction: column;

@media (max-width: 768px) {
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
}

`;

export const SubmitBox = styled.div`
margin-top : 15px;
`;

export const Submit = styled.button`
width : 520px;
height : 55px;
border-radius : 25px;
text-align: center;
color : black;
font-size : 18px;
font-family: var(--font);
background-color : ${props => (props.$formValid ? 'yellow' : 'white')};

@media (max-width: 768px) {
    width : 410px;
    font-size : 15px;
  }

@media (max-width: 480px) {
    width : 320px;
    height : 50px;
    font-size : 14px;
}

  
`;