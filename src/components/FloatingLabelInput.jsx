import React from 'react';

const FloatingLabelInput = ({ label, type = 'text', value, onChange, name, required = false }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="input-field"
        placeholder=" "
        required={required}
      />
      <label htmlFor={name} className="input-label">
        {label}{required && <span style={{ color: '#E03B3B' }}>*</span>}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
