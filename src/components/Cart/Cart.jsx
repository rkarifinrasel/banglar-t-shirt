import React from 'react';
import './Cart.css';
import { key } from 'localforage';
const Cart = ({carts,handleDeleteFromCart}) => {
    return (
        <div>
            <h1>Order summary:{carts.length}</h1>
            <div>
                {
                    carts.map(cart=> 
                    <p key={cart._id}>Name:{cart.name}
<button onClick={()=>handleDeleteFromCart(cart._id)} className='btn-delete'>delete</button>
                    </p>
                    )
                }
            </div>

        </div>
    );
};

export default Cart;