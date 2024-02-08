import React from "react";
function classNames(...classes) {
  return classes.join(" ");
}
const Input = ({
  value,
  className,
  name,
  placeholder,
  type = "text",
  onChange,
  readonly = "",
}) => {
  return (
    <>
      <input
        className={classNames(
          "bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1.5 ",
          className
        )}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readonly}
      />
    </>
  );
};

export default Input;
