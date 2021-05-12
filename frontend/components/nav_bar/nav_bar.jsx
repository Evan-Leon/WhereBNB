import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search'

const NavBar = ({currentUser, logout, openModal, closeModal }) => {
    
    const navSessionLinks = () =>(
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    )
    
   const navGreeting = () => (
       <div className="greeting-nav">
           <h2 className="greeting-first-name">Greetings, {currentUser.firstName}</h2>
           <button className="nav-logout-button" onClick={logout}>Log Out</button>
       </div>
   )

    return (
       currentUser ?
       navGreeting(currentUser, logout) :
       navSessionLinks()
    )
}

export default NavBar;