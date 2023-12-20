import React, { useState } from 'react';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input).toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="calculator bg-gradient-to-r from-purple-400 to-pink-500 max-w-md mx-auto p-6 border rounded-md shadow-md">
      <input
        type="text"
        className="input-field text-2xl mb-4 p-2 w-full bg-white text-gray-800 rounded"
        value={input}
        readOnly
      />
      <div className="output-section min-h-16">
        <div className="output text-2xl font-bold mb-4 bg-white text-gray-800 rounded p-2">
          {output}
        </div>
      </div>
      <div className="buttons grid grid-cols-4 gap-2 mt-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
