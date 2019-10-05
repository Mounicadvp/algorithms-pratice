import React, { useState } from 'react';


const IncCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times. Click here to increment the counter!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default IncCounter; //to use in any other class
