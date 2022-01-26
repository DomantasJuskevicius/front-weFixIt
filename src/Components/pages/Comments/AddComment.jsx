import React, { useState } from "react";
import { create } from "../../../utils/functions";
import { Button, Form, ButtonContainer, TextArea } from "../Auth/Styles";

export const CreateComment = ({ postId, jwt, userName }) => {
  const [commentDetails, setCommentDetails] = useState({
    author: userName,
    comment_text: "",
    post_id: postId,
  });
  const onFormSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("author", commentDetails.author);
    formData.append("comment_text", commentDetails.comment_text);
    formData.append("post_id", commentDetails.post_id);

    create(formData, 2, jwt);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCommentDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <ButtonContainer>
      <Form onSubmit={onFormSubmit}>
        <TextArea
          name="comment_text"
          type="text"
          placeholder="Palik komentarą!"
          onChange={handleOnChange}
        />

        <Button type="submit">Post comment</Button>
      </Form>
    </ButtonContainer>
  );
};
