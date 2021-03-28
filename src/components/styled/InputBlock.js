import React from "react";

import { Input, Label } from ".";

const InputBlock = (props) => {
  const {
    id,
    name,
    type,
    min,
    max,
    defaultValue,
    disabled,
    placeholder,
    label,
    width,
  } = props;

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        name={name}
        type={type}
        min={min}
        max={max}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        submit={type === "submit"}
        width={width}
      />
    </>
  );
};

export default InputBlock;
