import React from "react";
import styled, { css } from "styled-components";

const InputContainer = styled.div`
  line-height: 1;
  display: flex;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  padding: 0 15px;
  margin-bottom: 16px;
  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
    `}
`;

const InputStyled = styled.input`
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(14, 11, 11, 0.25);
  border-radius: 8px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const AreaStyled = styled.textarea`
  width: 100%;
  min-height: 80px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(14, 11, 11, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${InputStyled}:focus + & {
    background: #ffa689;
  }
  ${InputStyled}:invalid + & {
    background: #fe2f75;
  }
  ${InputStyled}:valid + & {
    background: #70edb9;
  }
`;

export const Input = ({ placeholder, type, name, error, ...restProps }) => {
  return (
    <InputContainer error={error}>
      <InputStyled
        type={type ? type : "text"}
        name={name ? name : "text"}
        id={name}
        required
        aitocomplete="off"
        placeholder={placeholder}
        {...restProps}
      />
      <Status />
    </InputContainer>
  );
};

export const TextArea = ({ placeholder, type, name, error, ...restProps }) => {
  return (
    <InputContainer error={error}>
      <AreaStyled
        type={type ? type : "text"}
        name={name ? name : "text"}
        id={name}
        required
        aitocomplete="off"
        placeholder={placeholder}
        {...restProps}
      />
      <Status />
    </InputContainer>
  );
};
