import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';
function Calculator() {
const [display, setDisplay] = useState('0');
const [theme, setTheme] = useState('light');
const handleButtonClick = (value) => {
if (value === '=') {
try {
const result = evaluate(display);
setDisplay(result.toString());
} catch (error) {
setDisplay('Error');
}
} else if (value === 'C') {
setDisplay('0');
} else if (value === '+/-') {
setDisplay((parseFloat(display) * -1).toString());
} else if (value === '.') {
if (!display.includes('.')) {
setDisplay(display + '.');
}
} else {
setDisplay(display === '0' && value !== '.' ? value : display + value);
}
};
const toggleTheme = () => {
setTheme(theme === 'light' ? 'dark' : 'light');
};
return (
<div className={`calculator ${theme}`}>
<div className="display">
<span className="display-text">{display}</span> {/* Display in a span */}
<button onClick={toggleTheme} className="theme-button">
{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
</button>
</div>
<div className="buttons">
{/* ... (All your buttons here - same as before) */}
<button onClick={() => handleButtonClick('C')} className="operator">C</button>
<button onClick={() => handleButtonClick('+/-')} className="operator">+/-</button>
<button onClick={() => handleButtonClick('%')} className="operator">%</button>
<button onClick={() => handleButtonClick('/')} className="operator">/</button>
<button onClick={() => handleButtonClick('7')}>7</button>
<button onClick={() => handleButtonClick('8')}>8</button>
<button onClick={() => handleButtonClick('9')}>9</button>
<button onClick={() => handleButtonClick('*')} className="operator">*</button>
<button onClick={() => handleButtonClick('4')}>4</button>
<button onClick={() => handleButtonClick('5')}>5</button>
<button onClick={() => handleButtonClick('6')}>6</button>
<button onClick={() => handleButtonClick('-')} className="operator">-</button>
<button onClick={() => handleButtonClick('1')}>1</button>
<button onClick={() => handleButtonClick('2')}>2</button>
<button onClick={() => handleButtonClick('3')}>3</button>
<button onClick={() => handleButtonClick('+')} className="operator">+</button>
<button onClick={() => handleButtonClick('0')} className="zero">0</button>
<button onClick={() => handleButtonClick('.')}>.</button>
<button onClick={() => handleButtonClick('=')} className="equal">=</button>
</div>
</div>
);
}
export default Calculator;