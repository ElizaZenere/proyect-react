import React, { useState } from 'react';
export const PrimerComponente = () => {
    const [result, setResult] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState('');
    const [expression, setExpression] = useState('');
  
    const handleNumClick = (num) => {
      if (operation === '') {
        setNum1(num1 * 10 + num);
        setExpression(`${num1 * 10 + num} ${operation}`);
        setResult(0);
      } else {
        setNum2(num2 * 10 + num);
        setExpression(`${num1} ${operation} ${num2 * 10 + num}`);
      }
    };
  
    const handleOperationClick = (op) => {
      setOperation(op);
      setExpression(`${num1} ${op}`);
    };
  
    const handleCalculate = () => {
      let calculatedResult;
      switch (operation) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          calculatedResult = num1 / num2;
          break;
        default:
          calculatedResult = 0;
      }
      setResult(calculatedResult);
      setExpression(`${num1} ${operation} ${num2} = ${calculatedResult}`);
      setNum1(0);
      setNum2(0);
      setOperation('');
    };
  
    return (
      <div>
        <div>
          <input type="text" value={expression} disabled />
        </div>
        <div>
          <input type="text" value={result} disabled />
        </div>
        <div>
          <button onClick={() => handleNumClick(1)}>1</button>
          <button onClick={() => handleNumClick(2)}>2</button>
          <button onClick={() => handleNumClick(3)}>3</button>
          <button onClick={() => handleOperationClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleNumClick(4)}>4</button>
          <button onClick={() => handleNumClick(5)}>5</button>
          <button onClick={() => handleNumClick(6)}>6</button>
          <button onClick={() => handleOperationClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleNumClick(7)}>7</button>
          <button onClick={() => handleNumClick(8)}>8</button>
          <button onClick={() => handleNumClick(9)}>9</button>
          <button onClick={() => handleOperationClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleNumClick(0)}>0</button>
          <button onClick={() => handleCalculate()}>=</button>
          <button onClick={() => handleOperationClick('/')}>/</button>
          <button onClick={() => {
            setNum1(0);
            setNum2(0);
            setResult(0);
            setOperation('');
            setExpression('');
          }}>Clear</button>
        </div>
      </div>
    );
  }  