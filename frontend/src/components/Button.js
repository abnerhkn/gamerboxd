import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick = () => {}, label, className = '', size = 'medium' }) => {
  const sizeClass = size ? `button-${size}` : '';
  return (
    <button className={`${className} ${sizeClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Button;
