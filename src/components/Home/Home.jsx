import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData()
    const[carts,setCarts]=useState([])
    // console.log(tshirts)
    const handleBuyButton=(tshirt)=>{
        const exists=carts.find(ct=>ct._id===tshirt._id)
        if(exists){
            toast('This T-Shirt have allready added')
        }
        else{
            const newCart=[...carts,tshirt]
        setCarts(newCart);
        }
    }
    const handleDeleteFromCart=(id)=>{
        const newDeleteCarts=carts.filter(ct=>ct._id!==id)
        setCarts(newDeleteCarts)
        // console.log(id)
    }
    return (
        <div className='shop-containeer'>
            <div className='tshirt-containeer'>
           {
            tshirts.map(tshirt=><TShirt 
                tshirt={tshirt} 
                key={tshirt.id}
                handleBuyButton={handleBuyButton}
                >

                </TShirt>)
           }
        </div>
        <div className='cart-containeer'>
            <Cart carts={carts}handleDeleteFromCart={handleDeleteFromCart}  ></Cart>
        </div>
        </div>
    );
};

export default Home;