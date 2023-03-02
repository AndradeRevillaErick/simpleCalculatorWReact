import { useEffect, useState } from "react"


export const Calculator = () => {

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0);

    const onHandleOperation = ( value ) => {
        setOperation( operation.concat(value) );
    }

    const onHandleClear = () => {
        setOperation( '' );
    }

    const onHandleDelete = () => {
        setOperation( operation.slice(0, -1) );
    }

    const onHandleResult = () => {
        
        const numbers = operation.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

        const pilaOperand = [];
        const pilaSings = [];

        numbers.map( val => {
            if ( isNaN(val) ) {
                pilaSings.push( val );
            }else{
                pilaOperand.push( parseFloat(val) );
            }
            
            if( pilaOperand.length >= 2 ){
                const operand2 = pilaOperand.pop();
                const operand1 = pilaOperand.pop();
                const sign = pilaSings.pop();
          
                switch ( sign ) {
                  case '+':
                    pilaOperand.push(operand1 + operand2);
                    break;
          
                  case '-':
                    pilaOperand.push(operand1 - operand2);
                    break;
          
                  case '*':
                    pilaOperand.push(operand1 * operand2);
                    break;
          
                  case '/':
                    pilaOperand.push(operand1 / operand2);
                    break;
                }
            }
        });
        
        setResult( pilaOperand.pop() );
    }


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