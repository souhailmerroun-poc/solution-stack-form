import React, { useState } from 'react';
import stepOptions from './stepOptions';
import SelectedOptions from './SelectedOptions';
import Form from './Form';

const App = () => {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({ 0: [], 1: [] });

  const handleOptionChange = (stepIndex, newOptions) => {
    setSelectedOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[stepIndex] = newOptions;
      return updatedOptions;
    });
  };

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Form step={step} selectedOptions={selectedOptions[step]} onChange={(option, isChecked) => handleOptionChange(step, option, isChecked)} />
          {step > 0 && (
            <button onClick={() => setStep(step - 1)}>Back</button>
          )}
          {step < stepOptions.length - 1 && (
            <button onClick={() => setStep(step + 1)}>Next step</button>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <SelectedOptions stepOptions={stepOptions} selectedOptions={selectedOptions} />
        </div>
      </div>
    </div>
  );
};

export default App;