import React from "react";

function InputField({
  id,
  type = "text",
  label,
  placeholder,
  step,
  value,
  onChange,
}) {
  return (
    <div className="input-pair ms-2 ps-4" style={{ width: "43%" }}>
      <label className="pb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="p-2 m-1"
        id={id}
        type={type}
        name={id}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
