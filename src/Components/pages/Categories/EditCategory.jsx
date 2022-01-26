import React from "react";
import { Input, TextArea } from "../../input";

export const EditCategory = ({
  title,
  description,
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
    <div>
      {editClicked.value && editClicked.index === index ? (
        <div>
          <Input
            name="title"
            defaultValue={title}
            onChange={handleOnChange}
          />
          <TextArea
            name="description"
            defaultValue={description}
            onChange={handleOnChange}
          />
        </div>
      ) : (
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
