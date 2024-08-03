import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick, label, className}) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
