import styled from "styled-components";

export const SignupContainer = styled.div`
`;

export const SignupForm = styled.div`
margin-top : 40px;
display: flex; 
justify-content: center; 
align-items: center;
flex-direction: column;

`;

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding-top : 90px;

  @media (max-width: 480px) {
    padding-bottom : 70px;
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
  width : 400px;
  font-size : 13px;
}

@media (max-width: 480px) {
  width : 300px;
  font-size : 11px;
}

`;


export const ErrorMessage = styled.div`
color: red;
font-size : 13px;
margin-left : 10px;
margin-bottom : 13px;

@media (max-width: 480px) {
  font-size : 11px;
}

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
  width : 420px;
  font-size : 15px;
}

@media (max-width: 480px) {
  width : 320px;
  height : 50px;
  font-size : 13px;
}

`;

export const SignupTitle = styled.div`
color : white;
font-weight : bold;
font-size : 20px;
text-align: center;
justify-content: center;
align-items: center;
margin-top : 40px;

@media (max-width: 768px) {
  font-size : 17px;
}

`;

export const InputBox = styled.div`
`;

export const SubmitBox = styled.div`
margin-top : 15px;
`;

export const Bottom = styled.div`
display : flex;
justify-content: space-between;
color : white;
margin-top : 40px;

@media (max-width: 768px) {
  padding : 0 30px;
}

@media (max-width: 480px) {
  width : calc(80%);
}

`;

export const Item1 = styled.div`
@media (max-width: 768px) {
  font-size : 13px;
}

@media (max-width: 480px) {
  font-size : 11px;
  margin-left : 10px;
}
`;
export const Item2 = styled.div`
font-weight : bold;

@media (max-width: 768px) {
  font-size : 13px;
}

@media (max-width: 480px) {
  font-size : 11px;
}
`;
