import React from 'react'
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <h2 className = 'brand-logo' >eStore</h2>
                <ul className="right">
                    <li><NavLink to='/'> Home</NavLink></li>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/'> Home</Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;
