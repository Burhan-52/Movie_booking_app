import React from "react";

const InputBox = ({ type, value, handleChange }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputBox;
