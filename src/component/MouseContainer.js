import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <hr/>
            <button onClick={() => setDisplay(!display)} >toggle to Click to stop or start showing mouse pointer location</button>
            {display && <HookMouse/>}
        </div>
    );
}

export default MouseContainer;
