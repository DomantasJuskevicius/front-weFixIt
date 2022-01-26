import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aec6cf;
  color: #000;
  text-align: center;
  border: 3px solid #ff8d8d;
  border-radius: 20px;
  padding: 30px 30px 70px;
  box-shadow: 0 0 15px black;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background: transparent;
  font-weight: 500;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ff8d8d;
  }
`;

export const TEXT = styled.p`
  padding-top: 20px;
  position: center;
`;

export const Header = styled.h1`
  color: #5dc399;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;
