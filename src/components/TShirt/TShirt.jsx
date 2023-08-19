import React from 'react';
import './TShirt.css';
import { Link } from 'react-router-dom';
const TShirt = ({tshirt,handleBuyButton}) => {
    const{id,gender,name,picture,price}=tshirt;
    return (
        <div className='t-shirt-details'>
            <img src={picture} alt="" srcset="" />
            <div >
                <h1>Name:{name}</h1>
                <p>Gender:{gender}</p>
                <p>Price:{price}</p>
                <p>Name:{name}</p>
                <Link to=''><button onClick={()=>handleBuyButton(tshirt)} className='btn-buy'>Buy now</button></Link>
            </div>
        </div>
    );
};

export default TShirt;