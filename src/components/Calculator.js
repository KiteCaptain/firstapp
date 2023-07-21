import { useReducer  } from "react";

const initialState = {
    result: 0,
    inputValue: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                result: state.result + parseFloat(state.inputValue),
                inputValue: ''
            }
        case 'SUBTRACT':
            return {
                ...state,
                result: state.result - parseFloat(state.inputValue),
                inputValue: ''
            }
        case 'UPDATE_INPUT':
            return {
                ...state, 
                inputValue: action.payload,
            }
        default: 
            return state
    }
}

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleInputChange = (e) => {
        dispatch({type: 'UPDATE_INPUT', payload: e.target.value})
    }
    const handleAdd = () => {
        dispatch({ type: 'ADD'})
    }
    const handleSubtract = () => {
        dispatch({type: 'SUBTRACT'})
    }

    return (
        <>
        <h1>Simple Calcultor</h1>
        <input 
            type="number"
            value={state.inputValue}
            onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <p>Result: {state.result}</p>
        </>
    )
}

export default Calculator