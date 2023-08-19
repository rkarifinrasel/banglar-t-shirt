import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const ringContext=createContext('gold')
export const moneyContext=createContext(0);
const Grandpa = () => {
    const [money,setMoney]=useState(0)
    const ring='diamond';
    return (
        <div className='grandpa'>
           <h1>Grandpa</h1>
           <p>Has Money:{money}</p>
         <moneyContext.Provider value={[money,setMoney]}>
         <ringContext.Provider value='goldren ring'>

<section className='flex'>
  <Father  ring={ ring} ></Father>
  <Uncle></Uncle>
  <Aunty ring={ring}></Aunty>
 </section>
</ringContext.Provider>
         </moneyContext.Provider>
         
        </div>
    );
};

export default Grandpa;