import React from 'react';
import './Cart.css';
import { key } from 'localforage';
const Cart = ({carts,handleDeleteFromCart}) => {
    // conditional operation
    let message;
    if(carts.length===0){
        message=<p>Please add some products</p>
    }

    return (
       <div className='order-containeer'>
         <div className='order-summary'>
            <h1>Order summary:{carts.length}</h1>
            {message}
            
            {/* teronary condition */}
            {
                carts.length>2
                ?
                <span>Boroloksss</span>
                :
<span>Foinni</span>
            }
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
       </div>
    );
};

export default Cart;