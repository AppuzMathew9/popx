import React from 'react';

const CustomRadioGroup = ({ label, name, options, value, onChange, required = false }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {label && (
        <span className="radio-section-label">
          {label}
          {required && <span style={{ color: '#E03B3B' }}>*</span>}
        </span>
      )}
      <div className="radio-group">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="radio-input"
              required={required}
            />
            <span className="radio-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioGroup;
