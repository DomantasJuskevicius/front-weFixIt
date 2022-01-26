import React, { useState } from "react";
import { create } from "../../../utils/functions";
import { Input, TextArea } from "../../input";
import { Button, Form, ButtonContainer, Table } from "../Auth/Styles";

export const CreateCategory = ({ jwt }) => {
  const [categoryDetails, setCategoryDetails] = useState({
    title: "",
    description: "",
  });
  const [visible, setVisible] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", categoryDetails.title);
    formData.append("description", categoryDetails.description);
    create(formData, 0, jwt);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCategoryDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <ButtonContainer>
      <Button onClick={() => setVisible(!visible)}>Add category</Button>
      <Table>
        {visible && (
          <div>
            <Form onSubmit={onFormSubmit}>
              <Input
                name="title"
                placeholder="Title"
                onChange={handleOnChange}
              />
              <TextArea
                name="description"
                placeholder="Short description"
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
