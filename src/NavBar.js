import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/puppies">Puppies</Link></li>
        </ul>
    );
}

export default NavBar;