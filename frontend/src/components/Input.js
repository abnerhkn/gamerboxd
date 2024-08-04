import React from "react";
import PropTypes from "prop-types";
import "../styles/Input.css";

const Input = ({
  label,
  value,
  onChange,
  type,
  placeholder,
  size = "medium",
  className = "",
}) => {
  const sizeClass = size ? `input-${size}` : "";
  return (
    <div>
      <label>{label}</label>
      <input
        className={`${className} ${sizeClass}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
};

export default Input;
