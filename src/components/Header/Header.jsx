import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css';
const Header = () => {
    return (
        <nav>
           <Link to='/'>Home</Link>
           <Link to='/OrderReview'>OrderReview</Link>
           <Link to='/About'>About</Link>
           <Link to='/Contact'>Contact</Link>
           <Link to='/Grandpa'>Grandpa</Link>
          
           
        </nav>
    );
};

export default Header;