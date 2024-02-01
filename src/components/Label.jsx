import React from "react";

const Label = ({ htmlFor, label }) => {
  return <label htmlFor={htmlFor}>{label}</label>;
};

export default Label;
