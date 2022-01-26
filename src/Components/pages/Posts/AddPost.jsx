import React, { useState } from "react";
import { create } from "../../../utils/functions";
import { Input, TextArea } from "../../input";
import { Button, Form, ButtonContainer, Table } from "../Auth/Styles";

export const CreatePost = ({ categoryId, jwt }) => {
  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    category_id: categoryId,
  });
  const [visible, setVisible] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", postDetails.title);
    formData.append("content", postDetails.content);
    formData.append("category_id", postDetails.category_id);

    create(formData, 1, jwt);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPostDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <ButtonContainer>
      <Button onClick={() => setVisible(!visible)}>Create post</Button>
      <Table>
        {visible && (
          <div>
            <Form onSubmit={onFormSubmit}>
              <Input
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleOnChange}
              />
              <TextArea
                name="content"
                type="text"
                placeholder="Your problem here"
                onChange={handleOnChange}
              />
              <Button type="submit">Create</Button>
            </Form>
          </div>
        )}
      </Table>
    </ButtonContainer>
  );
};
