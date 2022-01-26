import React from "react";
import styled from "styled-components";
import { parseJwt } from "../../utils/functions";
import Cookies from "universal-cookie/es6";
import axios from "axios";
import { NavLink } from "./NavbarStyled";

const NavMenu = styled.ul`
  z-index: 1;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const logoutUrl = "https://db-wefixit.herokuapp.com/api/auth/logout";
const cookies = new Cookies();
let jwtToken = cookies.get("jwt") ? cookies.get("jwt") : null;
const config = {
  headers: { Authorization: `Bearer ${jwtToken}` },
};

const logout = (e) => {
  e.preventDefault();
  axios.post(logoutUrl, "", config).then((response) => {
    window.location = "/Category";
    cookies.remove("jwt");
  }).catch((error) => {
    window.location = "/Category";
    cookies.remove("jwt");
  });
};

const RightNav = ({ open }) => {
  const cookies = new Cookies();
  let jwtToken = cookies.get("jwt") ? cookies.get("jwt") : null;
  const userData = jwtToken ? parseJwt(jwtToken) : null;

  return (
    <>
      <NavMenu open={open}>
        <NavLink to="/Category"> Categories </NavLink>
        <NavLink to="/Post"> Posts </NavLink>
        {jwtToken ? (
          <>
            <NavLink to="/MyProfile">
              <>{userData.username}</>
            </NavLink>
            <NavLink onClick={logout} to="/">
              Log out
            </NavLink>
          </>
        ) : (
          <NavLink to="/MyProfile">Sign in</NavLink>
        )}
      </NavMenu>
    </>
  );
};

export default RightNav;
