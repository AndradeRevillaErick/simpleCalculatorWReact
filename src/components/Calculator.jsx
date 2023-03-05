import { useCalculator } from "../hooks/useCalculator"

export const Calculator = () => {

    const { onHandleOperation, onHandleClear, onHandleDelete, onHandleResult, operation, result } = useCalculator();

    return(
        <>
            <div className="calculator">
                <div className="display">
                    <div data-testid="test-display" className="input">{ operation }</div>
                    <div data-testid="test-result" className="result">{ result }</div>
                </div>

                <div className="buttons">
                    <button className="number" onClick={ onHandleClear }>AC</button>
                    <button className="number" onClick={ onHandleDelete }>DE</button>
                    <button className="operator" onClick={ () => onHandleOperation('.') }>.</button>
                    <button className="operator" onClick={ () => onHandleOperation('/') }>/</button>

                    <button className="number" onClick={ () => onHandleOperation(7) } >7</button>
                    <button className="number" onClick={ () => onHandleOperation(8) } >8</button>
                    <button className="number" onClick={ () => onHandleOperation(9) } >9</button>
                    <button className="operator" onClick={ () => onHandleOperation('*') }>*</button>
                    
                    <button className="number" onClick={ () => onHandleOperation(4) } >4</button>
                    <button className="number" onClick={ () => onHandleOperation(5) } >5</button>
                    <button className="number" onClick={ () => onHandleOperation(6) } >6</button>
                    <button className="operator" onClick={ () => onHandleOperation('-') }>-</button>


                    <button className="number" onClick={ () => onHandleOperation(1) } >1</button>
                    <button className="number" onClick={ () => onHandleOperation(2) } >2</button>
                    <button className="number" onClick={ () => onHandleOperation(3) } >3</button>
                    <button className="operator" onClick={ () => onHandleOperation('+') }>+</button>
                    
                    <button className="number" onClick={ () => onHandleOperation('00') } >00</button>
                    <button className="number" onClick={ () => onHandleOperation(0) } >0</button>
                    <button className="operator equal" onClick={ onHandleResult } >=</button>
                </div>
            </div>
        </>
    )
}