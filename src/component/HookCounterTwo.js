import React,{useState} from 'react';

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    {/*const [notClicked, clicked] =  useState(false);*/}
    {/*getLike(){
        if(notClicked){
            setCount(count-1)
        }
        else{
            setCount(clicked(notClicked=true), count+1)
        }}
    */}
    
    return (
        <div> 
            <hr/>
            Like:{count}
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={() => setCount(count+1)}>increase</button>
            <button onClick={() => setCount(count-1)}>decrease</button>
            {/*<button onClick={() => getLike()}>toggle</button>*/}
            <hr/>

        </div>
    );
}

export default HookCounterTwo;
