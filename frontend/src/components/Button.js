import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick, label, className, size}) => {
  const sizeClass = size ? `button-${size}` : '';
  return (
    <button className={`${className} ${sizeClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  className: '',
  size: 'medium', 
};

export default Button;
