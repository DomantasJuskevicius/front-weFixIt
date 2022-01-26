import React from "react";
import { TextArea } from "../../input";

export const EditComment = ({
  comment_text,
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
    <div style={{ textDecoration: "none", color: "black" }}>
      {editClicked.value && editClicked.index === index ? (
        <TextArea
          name="comment_text"
          defaultValue={comment_text}
          onChange={handleOnChange}
        />
      ) : (
        <h4>{comment_text}</h4>
      )}
    </div>
  );
};
