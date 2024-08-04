import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Message.css';

const Message = ({ label, className, isLoading = false, color, onClose }) => {
    let backgroundColor;

    if (className === 'success') {
        backgroundColor = 'green';
    } else if (className === 'error') {
        backgroundColor = 'red';
    } else if (className === 'warning') {
        backgroundColor = 'yellow';
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`message ${className}`}
            style={{ backgroundColor, color }}
        >
            {isLoading ? 'Loading...' : label}
            <div className="progress-bar"></div>
        </div>
    );
};

Message.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.oneOf(['success', 'error', 'warning']),
    isLoading: PropTypes.bool,
    color: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default Message;
