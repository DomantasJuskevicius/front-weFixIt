import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 75px;
  display: flex;
  border-bottom: 2px solid #f1f1f1;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 999;
  flex-wrap: wrap;
`;

export const NavLink = styled(Link)`
  color: #ff8d8d;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.2s ease-in;
  &.active {
    color: #5dc399;
  }
  &:hover {
    color: #5dc399;
  }
`;

export const Span = styled.span`
  align-items: center;
  text-align: center;
  color: #5dc399;
`;

export const Logo = styled(Link)`
  align-items: center;
  text-align: center;
  color: #ff8d8d;
  align: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.5rem;

  &:hover span {
    color: #aec6cf;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: #ff8d8d;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #ff8d8d;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #5dc399;
  }
`;
