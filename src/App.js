//import logo from './logo.svg';
import React from 'react';
import './App.css';
import CommentForm from './component/CommentForm';
import DataFetching from './component/DataFetching';
//import DemoOne from './component/DemoOne';
import DemoTwo from './component/DemoTwo';
import HookCounterFive from './component/HookCounterFive';
import HookCounterFour from './component/HookCounterFour';
import HookCounterThree from './component/HookCounterThree';
//import ClassCounter from './component/ClassCounter';
//import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
//import IntervalHookCounter from './component/IntervalHookCounter';
//import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
//import ExampleOne from './component/ExampleOne';
//import ExampleState from './component/ExampleState';
import {UserProvider} from './component/useContext';
import UseContextUseReducerCounterOne from './component/UseContextUseReducerCounterOne';
import UseReducerCounterOne from './component/UseReducerCounterOne';
import UseReducerCounterTwo from './component/UseReducerCounterTwo';
import UseReducerDataFetching from './component/UseReducerDataFetching';
import UseReducerDataFetchingOne from './component/UseReducerDataFetchingOne';

function App() {
  return (
    <div className="App">
      {/*<ClassCounter/>*/}
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExampleOne name="Welcome to React"/>
        <ExampleState/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>
  <HookCounter/>*/}
  <HookCounterTwo/>
  <CommentForm/>
  <HookCounterThree/>
  <HookCounterFour/>
  <HookCounterFive/>
  {/*<HookMouse/>*/}
  <MouseContainer/>
  {/*<IntervalHookCounter/>*/}
  <DataFetching/>
  <UserProvider value="hello">
  <DemoTwo/>
  </UserProvider>
  <UseReducerCounterOne/>
  <UseReducerCounterTwo/>
  <UseContextUseReducerCounterOne/>
  <UseReducerDataFetching/>
  <UseReducerDataFetchingOne/>
  

    </div>
  );
}

export default App;
