import React, { useState } from 'react';

const FunctionalComponentExample = () => {
    const [stat, setStat] = useState('click me');

  const handleClick = () => {
     return setStat["clicked Me!!!"];
    };

    return (
        <button onClick={() => handleClick()}>
            <span> Hey there! </span>
        </button>
    );
};
