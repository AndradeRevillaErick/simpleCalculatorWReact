import { useEffect, useState } from "react"


export const Calculator = () => {

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0);

    const onHandleOperation = ( value ) => {
        setOperation( operation.concat(value) );
    }

    const onHandleClear = () => {
        setOperation( '' );
        setResult(0);
    }

    const onHandleDelete = () => {
        setOperation( operation.slice(0, -1) );
    }

    const calculate = () => {
        
        const numbers = operation.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
        const operands = [];
        const sings = [];
        const operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };

        numbers.map( val => {
            if( isNaN(val) ) {
                sings.push( val );
            }else{
                operands.push( parseFloat(val) );
            }

            if( operands.length >= 2 ){
                const op2 = operands.pop();
                const op1 = operands.pop();
                const operator = operators[sings.pop()];
                operands.push(operator(op1, op2));
            }
        });
        
        return operands.pop();
    }

    const onHandleResult = () => {
        try {
            const res = calculate(operation);
            setResult(res);
        } catch (e) {
            setResult('Syntax Error');
        }
    };

    return(
        <>
            <h1>{ operation }</h1>
            <h4>{ result }</h4>
            <button onClick={ onHandleClear }>AC</button>
            <button onClick={ onHandleDelete }>DE</button>
            <button onClick={ () => onHandleOperation('.') }>.</button>
            <button onClick={ () => onHandleOperation('/') }>/</button>
            <button onClick={ () => onHandleOperation('*') }>*</button>
            <button onClick={ () => onHandleOperation('-') }>-</button>
            <button onClick={ () => onHandleOperation('+') }>+</button>
            <button onClick={ () => onHandleOperation(9) } >9</button>
            <button onClick={ () => onHandleOperation(8) } >8</button>
            <button onClick={ () => onHandleOperation(7) } >7</button>
            <button onClick={ () => onHandleOperation(6) } >6</button>
            <button onClick={ () => onHandleOperation(5) } >5</button>
            <button onClick={ () => onHandleOperation(4) } >4</button>
            <button onClick={ () => onHandleOperation(3) } >3</button>
            <button onClick={ () => onHandleOperation(2) } >2</button>
            <button onClick={ () => onHandleOperation(1) } >1</button>
            <button onClick={ () => onHandleOperation(0) } >0</button>
            <button onClick={ () => onHandleOperation('00') } >00</button>
            <button onClick={ onHandleResult } >=</button>
        </>
    )
}