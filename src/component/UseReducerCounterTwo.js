import React, { useReducer } from 'react';

const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {... state,firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {... state,firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return {... state,secondCounter : state.secondCounter + action.value}
        case 'decrement2':
            return {... state,secondCounter : state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
} 

function UseReducerCounterTwo() {

    const [count, dispatch] =useReducer(reducer,initialState)

    return (
        <div>
            <hr/>
            <p>example of usereducer with complex state and action</p>
            <h1>Count 1 - {count.firstCounter}</h1>
            <h1>Count 2 - {count.secondCounter}</h1>
            <button onClick = {() => dispatch({type: 'increment', value:1})}>Increment 1</button>
            <button onClick = {() => dispatch({type: 'decrement', value:1})}>Decrement 1</button>
            <button onClick = {() => dispatch({type: 'increment', value:5})}>Increment 5</button>
            <button onClick = {() => dispatch({type: 'decrement', value:5})}>Decrement 5</button>
            <button onClick = {() => dispatch({type: 'increment2', value:10})}> Second Increment </button>
            <button onClick = {() => dispatch({type: 'decrement2', value:10})}> Second Decrement </button>
            <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default UseReducerCounterTwo;
