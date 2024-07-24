import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Travel Site</div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropbtn">Features</Link>
                    <div className="dropdown-content">
                        <Link to="/hotel">Hotel</Link>
                        <Link to="/restaurant">Restaurant</Link>
                    </div>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <section id="searchbar">
                <div className="search-bar">
                    <input type="search" placeholder="Search..."/>
                    <i className="fas fa-search"/>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Login</button>
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/admin-login">Admin Login</Link>
                    </div>
                </div>
            </section>

        </nav>
    );
};

export default Navbar;