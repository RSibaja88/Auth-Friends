import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';



const Nav = (props) => {
    return (
        <div className="navLinks">
            <nav>
                <NavLink to='/login'>Home</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
            </nav>
        </div>
    );
}

export default Nav;