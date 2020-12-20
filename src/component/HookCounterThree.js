import React, { useState } from 'react';

function HookCounterThree() {
    const [name,setName] = useState({firstName:'',secondName:''});
    return (
        <div>
            <hr/>
            <input type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})} />
            <input type="text" value={name.secondName} onChange={e => setName({...name,secondName: e.target.value})} />
            <h1>FirstName:{name.firstName}</h1>
            <h1>SecondName:{name.secondName}</h1>
            <p>{JSON.stringify(name)}</p>
        </div>
    );
}

export default HookCounterThree;
