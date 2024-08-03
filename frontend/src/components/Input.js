import React from 'react';
import '../styles/Input.css';

const Input = ({ label, value, onChange, type, placeholder }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    );
};

export default Input;