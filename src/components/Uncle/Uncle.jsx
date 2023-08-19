import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { moneyContext, ringContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const ring=useContext(ringContext)
    const[money,setMoney]=useContext(moneyContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p>Grandpa Money:{money}</p>
            <button onClick={()=>setMoney(money+1000)}>1000TK</button>
            <section className='flex'>
               <Cousin>Nabil</Cousin>
               <Cousin >Nabila
                <p>{ring}</p>
               </Cousin>
            </section>
        </div>
    );
};

export default Uncle;