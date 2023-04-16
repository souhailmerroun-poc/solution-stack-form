import React from 'react';
import CheckboxStep from './CheckboxStep';
import SelectStep from './SelectStep';

const Step = ({ name, options, selectedOptions, onChange, inputType }) => {
    if (inputType === 'checkbox') {
        return (
            <CheckboxStep
                name={name}
                options={options}
                selectedOptions={selectedOptions}
                onChange={onChange}
            />
        );
    }

    if (inputType === 'select') {
        return (
            <SelectStep
                name={name}
                options={options}
                selectedOptions={selectedOptions}
                onChange={onChange}
            />
        );
    }

    return null;
};

export default Step;
