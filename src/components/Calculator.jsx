import { useCalculator } from "../hooks/useCalculator"

export const Calculator = () => {

    const { onHandleOperation, onHandleClear, onHandleDelete, onHandleResult, operation, result } = useCalculator();

    return(
        <>
            <h1>{ operation }</h1>
            <h4 >{ result }</h4>
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