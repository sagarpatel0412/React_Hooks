import React, { useReducer } from 'react';
import ContextReducerDemo from './ContextReducerDemo';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
} 

function UseContextUseReducerCounterOne() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        <CountContext.Provider value = {{countState:count,countDispatch:dispatch}} >
        <div>
            <hr/>
            <p>Example of useContext With useReducer</p>
            <p>Count - {count}</p>
            <ContextReducerDemo/>
        </div>
        </CountContext.Provider>
        </div>
        
    );
}

export default UseContextUseReducerCounterOne;
