import React from 'react';

const SelectedOptions = ({ stepOptions, selectedOptions }) => (
    <div>
        <h2>Selected Options</h2>
        {stepOptions.map((stepOption, index) => (
            <div key={stepOption.name}>
                <h3>{stepOption.name}</h3>
                {selectedOptions[index]?.map((option) => (
                    <div key={option}>{option}</div>
                ))}
            </div>
        ))}
    </div>
);

export default SelectedOptions;