import React from "react";
import { Nav, Logo, Span } from "./NavbarStyled";
import Burger from "./Burger";
import styled from "styled-components";

const Span1 = styled.span`
  align-items: top;
  text-align: top;
  align: center;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo to="/Category">
          <Span1>
            we<Span>Fix</Span>It
          </Span1>
        </Logo>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
