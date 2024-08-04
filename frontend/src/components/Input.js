import React from "react";
import PropTypes from "prop-types";
import "../styles/Input.css";

const Input = ({
  label,
  value,
  onChange,
  type,
  placeholder,
  size,
  className,
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Input.defaultProps = {
  className: "",
  size: "medium",
};
export default Input;
