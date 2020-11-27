import React, { useState } from "react";

interface Props {
  placeholder?: string | undefined;
  type?: string | undefined;
  name?: string | undefined;
  label?: string | undefined;
  options: Array<string>;
  optionsLabel: Array<string>;
}

const DropdownField = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [index, setIndex] = useState<number | undefined>();
    const [show, setShow] = useState<boolean>(false);

    return (
      <>
        {props.label && <label htmlFor={props.name}>{props.label}</label>}
        <input
          type="hidden"
          name={props.name}
          value={index ? props.options[index] : ""}
          ref={ref}
        />
        <div className="rounded border border-gray-300 w-full p-1 focus:outline-none relative">
          <div
            className={`${index !== undefined ? "" : "text-gray-500"}`}
            onClick={() => {
              setShow(!show);
            }}
          >
            {index !== undefined
              ? props.optionsLabel[index]
              : props.placeholder}
          </div>
          {show && (
            <div
              className="absolute bg-white rounded  border border-gray-300 z-10"
              style={{ top: 40, minWidth: 300 }}
            >
              {props.optionsLabel.map((opt, i) => {
                return (
                  <div
                    className="p-2"
                    key={`option-${props.name}-${i}`}
                    onClick={() => {
                      setIndex(i);
                      setShow(false);
                    }}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
);

export default DropdownField;
