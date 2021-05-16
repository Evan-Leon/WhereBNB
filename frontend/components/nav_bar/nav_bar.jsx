import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search'
import Dropdown from './dropdown'

const NavBar = ({currentUser, demoUser, logout, openModal, closeModal, login }) => {
    
    const navSessionLinks = () =>(
        <div className="login-signup-dropdown">
                <ul className="login-buttons">
                    <li onClick={() => openModal('login')}>Login</li>
                    <li onClick={() => openModal('signup')}>Signup</li>
                    <li onClick={() => login(demoUser)}>Demo User</li>
                </ul>
        </div>
    )
    
//    const navGreeting = () => (
//        <div className="greeting-nav">
//            <h2 className="greeting-first-name">Greetings, {currentUser.firstName}</h2>
//            <button className="nav-logout-button" onClick={logout}>Log Out</button>
//        </div>
//    )

    return (
       navSessionLinks()
    )
}

export default NavBar;