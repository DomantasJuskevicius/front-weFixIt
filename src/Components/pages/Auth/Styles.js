import styled from "styled-components";

export const TextArea = styled.textarea`
  height: 40px;
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

export const SingleUnitContainer = styled.li`
  border-bottom: 2px solid #eeeff4;
  border-radius: 20px;
  padding-left: 20px;
  padding: 20px 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    text-decoration: none;
    font-size: 18px;
    line-height: 30px;
    color: #18191f;
  }
  a {
    width: 100%;
    &:hover {
      font-weight: 600;
    }
  }
`;

export const EditButtons = styled.div`
  display: flex;
  svg {
    width: 20px;
    &:first-child {
      margin-right: 40px;
      margin-left: 20px;
    }
  }
`;

export const SvgsContainer = styled.div`
  width: max-content;
  display: flex;
  svg {
    margin-right: 40px;
    transition: 0.06s ease-in-out;
    cursor: pointer;
    width: 20px;
    &:hover {
      transform: scale(2);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #5dc399;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const Button = styled.button`
  width: 50%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 1rem 0;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #5dc399;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 22px;
    padding: 1rem 0;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.83);
  padding-bottom: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 650;
  font-size: 38px;
`;

export const Para = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 350;
  font-size: 25px;
`;

export const Table = styled.div`
  outline: thin;
  outline-color: white;
  align-self: center;
  border-radius: 20px;
  padding: 20px;
  border-collapse: collapse;
  width: 50%;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
  text-indent: 20px;
  td {
    border: 1px solid black;
  }
`;

export const ButtonContainer = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: transparent;
  padding-bottom: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
