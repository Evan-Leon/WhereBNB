import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search'
import Dropdown from './dropdown'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // currentUser = false
        }
    }
    navSessionLinks = () =>(
        <div className="login-signup-dropdown">
                <ul className="login-buttons">
                    <li onClick={() => this.props.openModal('login')}>Login</li>
                    <li onClick={() => this.props.openModal('signup')}>Signup</li>
                    <li onClick={() => this.props.login(this.props.demoUser)}>Demo User</li>
                </ul>
        </div>
    )
    
   navGreeting = () => (
//        <div className="greeting-nav">
//            <h2 className="greeting-first-name">Greetings, {currentUser.firstName}</h2>
           <div className="nav-logout-button" onClick={this.props.logout}>Log Out</div>
//        </div>
   )

    render(){
        
        if (this.props.currentUser){
            return(
            <div className="nav-logout-button" onClick={this.props.logout}>Log Out</div>
            )
        } else {
            return(
                this.navSessionLinks()
            )
        }
    }
}

export default NavBar;