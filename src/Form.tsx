import React from 'react';
import Step from './Step';
import stepOptions from './stepOptions';

const Form = ({ step, selectedOptions, onChange }) => {
    if (stepOptions[step]) {
        const currentStep = stepOptions[step];
        return (
            <Step
                name={currentStep.name}
                options={currentStep.options}
                selectedOptions={selectedOptions}
                onChange={onChange}
                inputType={currentStep.inputType}
            />
        );
    }
    return null;
};

export default Form;
