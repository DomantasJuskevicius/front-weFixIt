import React, { useState } from "react";
import { Input } from "../../input";
import styled from "styled-components";
import { validateAndSanitizeLoginForm } from "../../validator/login";
import { LoginAPI } from "./LoginAPI";
import { Container, Form, LogoWrapper } from "./Styles";
import logo from "../../../images/LOGO.png";

const Span = styled.span`
  color: #5dc399;
`;

const Text = styled.p`
  color: black;
  padding: 8px 0;
`;

export const Login = ({ setServerMessage, setIsLoggedIn, setJwtToken }) => {
  const [APIDetailsLogin, setAPIDetailsLogin] = useState({
    email: "",
    password: "",
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const setClientSideError = (validationResult) => {
    if (validationResult.errors.password) {
      setServerMessage(validationResult.errors.password);
    }

    if (validationResult.errors.email) {
      setServerMessage(validationResult.errors.email);
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const validationResult = validateAndSanitizeLoginForm({
      email: loginDetails.email,
      password: loginDetails.password,
    });

    if (validationResult.isValid) {
      setLoginDetails({
        email: validationResult.sanitizedData.email,
        password: validationResult.sanitizedData.password,
      });
      setAPIDetailsLogin({ ...loginDetails });
    } else {
      setLoading(false);
      setClientSideError(validationResult);
    }
  };

  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3> we <Span> FIX </Span> It </h3>
      </LogoWrapper>
      <Form onSubmit={onFormSubmit}>
        <Text>Enter your email and password</Text>

        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={loginDetails.email}
          onChange={handleOnChange}
        />
        <Input
          type="password"
          dateFormat="yyyy-mm-dd"
          placeholder="Password"
          name="password"
          value={loginDetails.password}
          onChange={handleOnChange}
        />
        {loading}
        <button type="submit">Sign In</button>
        <LoginAPI
          APIDetailsLogin={APIDetailsLogin}
          setServerMessage={setServerMessage}
          setLoading={setLoading}
          setIsLoggedIn={setIsLoggedIn}
          setJwtToken={setJwtToken}
        />
      </Form>
    </Container>
  );
};
