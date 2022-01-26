import React from "react";
import { Container, Button, TEXT, Header } from "./AboutStyled";

export const AboutSite = ({ setAboutSiteVisible }) => {
  return (
    <Container>
      <Header>About site</Header>
      <Button onClick={() => setAboutSiteVisible(false)}>X</Button>
      <TEXT>This site is made to be a good forum for people who want to ask questions</TEXT>
    </Container>
  );
};
