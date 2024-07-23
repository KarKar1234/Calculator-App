import { useReducer } from "react"
import "./styles.css"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    REMOVE_DIGIT: 'remove-digit',
    CLEAR: 'clear',
    OPERATIONS: 'operations',
    EQUAL: 'equal',

} 

function reducer(state, { type, payload }){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state. currentNumber === "0") return state
            if (payload.digit === "." && state. currentNumber.includes(".")) return state

            return {
                ...state,
                currentNumber: `${state.currentNumber || ""}${payload.digit}`
            }
        case ACTIONS.CLEAR:
            return {
                currentNumber: ' ',
                previousNumber: null,
                operation: null,
            }
        case ACTIONS.REMOVE_DIGIT:
                    return {currentNumber: `${state.currentNumber.slice(0,-1)}`
            }
        
        case ACTIONS.OPERATIONS:
            if (state.currentNumber == null && state.previousNumber == null) {
                return state
            }
            
            if(state.currentNumber == null){
                return{
                    ...state,
                    operation: payload.operation,
                }
            }

            if (state.previousNumber == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousNumber: state.currentNumber,
                    currentNumber: null,
                }
            }
        case ACTIONS.EQUAL:
            if(state.currentNumber == null,
                state.previousNumber == null,
                state.operation == null)
                {return state}
            return{
                ...state,
                previousNumber: null,
                operation: null,
                currentNumber: equal(state)

            }
            

    
                
        }
}
function equal({currentNumber, previousNumber, operation}){
    const current = parseFloat(currentNumber);
    const previous = parseFloat(previousNumber);
    if (isNaN(previous) || isNaN(current)) return "";
    
    let computation = '';
    switch(operation){
        case "+":
            computation = current + previous;
            break
        case "-":
            computation = previous - current;
            break
        case "*":
            computation = current * previous;
            break
        case "÷":
            computation = previous / current;
            break
    }
    return computation.toString();


    


}

function App() {

const [{ currentNumber, previousNumber, operation}, dispatch] = useReducer(reducer,
    {}
)

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-number">{previousNumber} {operation}</div>
                <div className="current-number">{currentNumber}</div>
            </div>
            <button className="span-two" onClick={() => dispatch ({type: ACTIONS.CLEAR})}>AC</button>
            <button onClick={() => dispatch ({type: ACTIONS.REMOVE_DIGIT})}>DEL</button>
            <OperationButton operation = "÷" dispatch={dispatch} />
            <DigitButton digit = "1" dispatch={dispatch} />
            <DigitButton digit = "2" dispatch={dispatch} />
            <DigitButton digit = "3" dispatch={dispatch} />
            
            <OperationButton operation = "*" dispatch={dispatch} />
            <DigitButton digit = "4" dispatch={dispatch} />
            <DigitButton digit = "5" dispatch={dispatch} />
            <DigitButton digit = "6" dispatch={dispatch} />
            

            <OperationButton operation = "+" dispatch={dispatch} />
            <DigitButton digit = "7" dispatch={dispatch} />
            <DigitButton digit = "8" dispatch={dispatch} />
            <DigitButton digit = "9" dispatch={dispatch} />
            
            <OperationButton operation = "-" dispatch={dispatch} />
            <DigitButton digit = "." dispatch={dispatch} />
            <DigitButton digit = "0" dispatch={dispatch} />
            <button className="span-two" onClick={() => dispatch ({type: ACTIONS.EQUAL})}>=</button>
        </div>
    ) 
}

export default App
