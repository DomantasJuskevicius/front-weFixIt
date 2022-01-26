import React, { useState } from "react";
import styled from "styled-components";
import { Login } from "./Login1";
import { Register } from "./Register";
import Cookies from "universal-cookie/es6";
import { Profile } from "./Profile";
import { Button } from "./Styles";

const TopButtons = styled.div`
  display: flex;
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #aec6cf;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;
const ErrorContainer = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #f7f6f7;
  border-top: 3px solid #b81c23;
  margin-bottom: 20px;
`;

export const MyProfile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [serverMessage, setServerMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();

  return (
    <>
      {isLoggedIn || cookies.get("jwt") ? (
        <Profile setIsLoggedIn={setIsLoggedIn} cookies={cookies} />
      ) : (
        <>
          <FormContainer>
            {serverMessage !== "" && (
              <div>
                <ErrorContainer>
                  <p>{serverMessage}</p>
                </ErrorContainer>
              </div>
            )}
            <TopButtons>
              <Button isLogin={isLogin} onClick={() => setIsLogin(true)}>
                Login
              </Button>
              <Button isLogin={isLogin} onClick={() => setIsLogin(false)}>
                Register
              </Button>
            </TopButtons>
            {isLogin ? (
              <Login
                setServerMessage={setServerMessage}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Register
                setServerMessage={setServerMessage}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </FormContainer>
        </>
      )}
    </>
  );
};
