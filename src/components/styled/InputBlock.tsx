import React from "react";

import { Input, Label } from ".";

type InputBlockProps = {
  id?: string;
  name?: string;
  type?: string;
  min?: number;
  max?: number;
  defaultValue?: string | number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  width?: string;
  value?: string | number;
};

const InputBlock: React.FC<InputBlockProps> = ({
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
  value,
}) => {
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
        value={value}
      />
    </>
  );
};

export default InputBlock;
