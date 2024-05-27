import React from "react";
import styled from "styled-components";

const InputFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
`;

const LogInInputField = styled.input`

  width: 250px;
  font-size: 13px;
  display: block;
  border-radius: 7px;
  border: none;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 80%;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    width: 80%;
    padding: 6px;
  }
`;

const LogInInputForm = ({ label, type, value, onChange }) => {
  return (
    <InputFormWrapper>
      <LogInInputField
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </InputFormWrapper>
  );
};

export default LogInInputForm;
