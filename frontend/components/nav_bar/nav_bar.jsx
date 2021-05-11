import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.firstName}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to="/signup" className="sign-up-link">Sign Up</Link>
            <Link to="/login" className="log-in-link">Log In</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <h1 className="logo">WHEREBNB</h1>
            <div>
                {display}
            </div>
        </header>
    )
}

export default NavBar;