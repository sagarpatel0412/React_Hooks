import React, { useContext } from 'react';
import {CountContext} from './UseContextUseReducerCounterOne';

function ContextReducerDemo() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <p>Component Demo - {countContext.countState}</p>
            <button onClick = {() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick = {() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ContextReducerDemo;
