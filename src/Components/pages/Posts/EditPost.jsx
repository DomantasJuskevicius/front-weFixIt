import React from "react";
import styled from "styled-components";
import { Input, TextArea } from "../../input";

const EditContainer = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditPost = ({
  title,
  content,
  editClicked,
  index,
  setEditedData,
}) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <EditContainer style={{ textDecoration: "none", color: "black" }}>
      {editClicked.value && editClicked.index === index ? (
        <InputContainer>
          <Input name="title" defaultValue={title} onChange={handleOnChange} />
          <TextArea
            name="content"
            defaultValue={content}
            onChange={handleOnChange}
          />
        </InputContainer>
      ) : (
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      )}
    </EditContainer>
  );
};
