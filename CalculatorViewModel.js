import { useState } from 'react';
import { calculate } from './CalculatorModel';

const useCalculatorViewModel = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const calculateResult = () => {
    const calculatedResult = calculate(display);
    setResult(calculatedResult);
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  return {
    display,
    result,
    handlePress,
  };
};

export default useCalculatorViewModel;
