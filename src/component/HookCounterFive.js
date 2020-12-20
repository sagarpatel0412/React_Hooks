import React, { useEffect, useState } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("updating title!!!!!!!!!!");
        document.title = `You Clicked ${count} Times`
    },[count])

    return (
        <div>
            <hr/>
            
            <input type="text" placeholder="conditionally run effect example" value={name} onChange={e => setName(e.target.value)} />
            <p> for this example please see title bar tab of browser</p>
            <button onClick={() => setCount(count+1)} > You Clicked {count} Times</button>
        </div>
    )
}

export default HookCounterFive
