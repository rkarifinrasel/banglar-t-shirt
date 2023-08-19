import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const[money,setMoney]=useContext(moneyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p>Money:{money}</p>
        </div>
    );
};

export default Sister;