import React from "react";
import { Container, Button, TEXT, Header } from "./AboutStyled";

export const Clients = ({ setClientsVisible }) => {
  return (
    <Container>
      <Header>Our many clients</Header>
      <Button onClick={() => setClientsVisible(false)}>X</Button>
      <TEXT>...</TEXT>
    </Container>
  );
};
