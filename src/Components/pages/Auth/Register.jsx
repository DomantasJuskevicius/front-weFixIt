import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../input";
import { RegisterAPI } from "./RegisterAPI.js";
import { validateAndSanitizeRegisterForm } from "../../validator/register";
import { Container, Form, LogoWrapper } from "./Styles";
import logo from "../../../images/LOGO.png";

const Text = styled.p`
  color: black;
  padding: 8px 0;
`;

export const Register = (props) => {
  const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
    name: "",
    email: "",
    password: "",
    bdayDate: "",
  });
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    bdayDate: "",
  });
  const [loading, setLoading] = useState(false);

  /**
   * Sets client side error.
   *
   * Sets error data to result of our client side validation,
   * and statusbars to true so that its visible.
   *
   * @param {Object} validationResult Validation result data.
   */
  const setClientSideError = (validationResult) => {
    if (validationResult.errors.password_confirmation) {
      props.setServerMessage(validationResult.errors.password_confirmation);
    }

    if (validationResult.errors.password) {
      props.setServerMessage(validationResult.errors.password);
    }

    if (validationResult.errors.email) {
      props.setServerMessage(validationResult.errors.email);
    }

    if (validationResult.errors.name) {
      props.setServerMessage(validationResult.errors.name);
    }

    if (validationResult.errors.bdayDate) {
      props.setServerMessage(validationResult.errors.bdayDate);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setSignUpDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const validationResult = validateAndSanitizeRegisterForm({
      name: signUpDetails.name,
      email: signUpDetails.email,
      password: signUpDetails.password,
      password_confirmation: signUpDetails.password_confirmation,
      bdayDate: signUpDetails.bdayDate,
    });

    // If the data is valid.
    if (validationResult.isValid) {
      setSignUpDetails({
        name: validationResult.sanitizedData.name,
        email: validationResult.sanitizedData.email,
        password: validationResult.sanitizedData.password,
        password_confirmation:
          validationResult.sanitizedData.password_confirmation,
        bdayDate: validationResult.sanitizedData.bdayDate,
      });

      setAPIDetailsSignUp({ ...signUpDetails });
    } else {
      setLoading(false);
      setClientSideError(validationResult);
    }
  };

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          we <span>FIX</span> It
        </h3>
      </LogoWrapper>

      <Form onSubmit={onFormSubmit}>
        <Text>Enter your personal information</Text>
        <Input
          type="text"
          placeholder="User name"
          name="name"
          value={signUpDetails.name}
          onChange={handleOnChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={signUpDetails.email}
          onChange={handleOnChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={signUpDetails.password}
          onChange={handleOnChange}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password_confirmation"
          value={signUpDetails.password_confirmation}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          onFocus={(e) => (e.currentTarget.type = "date")}
          onBlur={(e) => (e.currentTarget.type = "text")}
          placeholder="Your birth date"
          name="bdayDate"
          onfocus="type=text"
          value={signUpDetails.bdayDate}
          onChange={handleOnChange}
          dateFormat="yyyy-MM-dd"
        />
        {loading && (
          <img className="woo-next-cart-item-spinner" alt="loading" />
        )}

        <button type="submit">Confirm registration</button>
        <RegisterAPI
          APIDetailsSignUp={APIDetailsSignUp}
          setUsername={props.setUsername}
          setIsLoggedIn={props.setIsLoggedIn}
          setServerMessage={props.setServerMessage}
          setLoading={setLoading}
        />
      </Form>
    </Container>
  );
};
