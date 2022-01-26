import React from "react";
import { Container, Button, TEXT, Header } from "./AboutStyled";

export const About = ({ setAboutVisible }) => {
  return (
    <Container>
      <Header>Our Story</Header>
      <Button onClick={() => setAboutVisible(false)}>X</Button>
      <TEXT>This is a small project, we are doing as much as we can, dont have to be rude in the posts, the posts need to be for help and seeking help</TEXT>
    </Container>
  );
};
