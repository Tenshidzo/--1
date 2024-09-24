import React, {useState} from 'react';
const Calculator = () => {
    const [input,setInput] = useState('');
    const [operation, setOperation] = useState(null);
    const [prevInput, setPrevInput] = useState('');
    const [result, setResult] = useState(null);
    
    const handleInput = (value) => {
        setInput((prev) => prev + value)
    }

    const handleOperation = (operator) =>{
        if(input !== ''){
            setPrevInput(input);
            setOperation(operator);
            setInput('')
        }
    }

    const calculateResult = () => {
        let num1 = parseFloat(prevInput);
        let num2 = parseFloat(input);
        if(operation === '/' && num2 === 0){
            setResult('Помилка. Ділення на 0 неможливе');
        }
        else{
            let calcResult = 0;
            switch(operation){
                case '+':
                    calcResult = num1 + num2;
                    break;
                case '-':
                    calcResult = num1 - num2;
                    break;
                case '*':
                    calcResult = num1 * num2;
                    break;
                case '/':
                    calcResult = num1 / num2
                    break;
            }
            setResult(calcResult);
            setInput(String(calcResult));
            setOperation(null);
            setPrevInput('');
        }
    }

    const resetCalc = () => {
        setInput('');
        setOperation(null);
        setPrevInput('');
        setResult(null);
    };

    return(
        <div className='calculator'>
            <div className = 'display'>
                {result !== null ? result : input || '0'}
            </div>
            <div className='buttons'>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                

                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                
                
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                

                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={() => handleOperation('.')}>.</button>
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
                <button onClick={calculateResult} > = </button>
                <button onClick={resetCalc}>C</button>
            </div>
        </div>
    )

}
export default Calculator;