import React,{useState} from 'react';

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <hr/>
            <button onClick={()=>setCount(count+1)}>likeCount {count} </button>
        </div>
    );
}

export default HookCounter;
