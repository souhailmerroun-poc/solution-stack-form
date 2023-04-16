import React from 'react';

const CheckboxStep = ({ name, options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (option, isChecked) => {
    let newOptions;
    if (isChecked) {
      newOptions = [...selectedOptions, option];
    } else {
      newOptions = selectedOptions.filter((item) => item !== option);
    }
    onChange(newOptions);
  };

  return (
    <div>
      <h3>{name}</h3>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxStep;