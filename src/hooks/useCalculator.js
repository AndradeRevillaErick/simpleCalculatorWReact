import { useEffect, useState } from "react"

export const useCalculator = () => {

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

    return {
        onHandleOperation,
        onHandleClear,
        onHandleDelete,
        onHandleResult,
        operation,
        result,
    }
}