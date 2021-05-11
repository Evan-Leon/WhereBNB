import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    const display = (
        <div>
            <Link to="/signup" className="sign-up-link">Sign Up</Link>
        </div>
    )
}