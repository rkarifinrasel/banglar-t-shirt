import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cousin>ormila</Cousin>
                <Cousin hasFriend={true}ring={ring}>Kabila</Cousin>
            </section>
        </div>
    );
};

export default Aunty;