import React from "react";
import styled from "styled-components";

const InputFormWrapper = styled.div`
    margin: 8px;
`;

const LogInInputField = styled.input`
    width: 250px;
    font-size: 13px;
    display: block;
    border-radius: 7px;
    border: none;
    padding: 10px;
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
