import { ACTIONS } from "./App.js"

export default function OperationButton ({dispatch, operation}) {

    return <button onClick={() => dispatch({ type: ACTIONS.OPERATIONS, payload: { operation }})}> {operation} </button>
}