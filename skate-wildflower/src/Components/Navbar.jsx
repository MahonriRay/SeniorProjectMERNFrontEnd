
import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsCSS/Navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/Skateboards">Skateboards</Link>
                <Link to="/Apparel">Apparel</Link>
                <Link to="/Shoes">Shoes</Link>
                <Link to="/AboutUs">About Us</Link>
            </nav>
        </div>
    );
}

export default Navbar;