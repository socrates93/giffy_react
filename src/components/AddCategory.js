import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ handleAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      handleAddCategory(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired,
};
