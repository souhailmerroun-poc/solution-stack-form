import React from 'react';

const SelectStep = ({ name, options, selectedOptions, onChange }) => {
  const handleSelectChange = (newValue) => {
    onChange([newValue]);
  };

  return (
    <div>
      <h3>{name}</h3>
      <select value={selectedOptions} onChange={(e) => handleSelectChange(e.target.value)}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectStep;
