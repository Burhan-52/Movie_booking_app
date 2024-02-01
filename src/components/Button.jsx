import React from "react";

const Button = ({ name, type, handleClick }) => {
  return (
    <button onClick={handleClick} type={type} className="btn">
      {name}
    </button>
  );
};

export default Button;
