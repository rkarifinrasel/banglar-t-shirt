import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const angti=useContext(ringContext)
    return (
        <div>
            <h3>Brother</h3>
            <p>{angti}</p>
        </div>
    );
};

export default Brother;