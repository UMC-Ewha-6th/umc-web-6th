import React from 'react';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingMessage = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #4A90E2;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Oval
      height={80}
      width={80}
      color="#4A90E2"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4A90E2"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    <LoadingMessage>Loading...</LoadingMessage>
  </SpinnerContainer>
);

export default LoadingSpinner;
