import React from "react";

interface Props {
  placeholder?: string | undefined;
  type?: string | undefined;
  name?: string | undefined;
  label?: string | undefined;
}

const InputField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        className="rounded border border-gray-300 w-full p-1 focus:outline-none"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        ref={ref}
      />
    </>
  );
});

export default InputField;
