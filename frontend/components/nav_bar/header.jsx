
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import NavBarContainer from "./nav_bar_container"
import Search from './search'

class Header extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="nav-header">
                <img src={window.logoUrl} alt="wherebnb-logo" className="logo" />
                < Search />
                <li className="users-dropdown-btn">
                    <FontAwesomeIcon className="bars" icon={faBars} />
                    <FontAwesomeIcon className="user-icon" icon={faUserCircle} />
                    <NavBarContainer className="login-buttons-box" />
                </li>
            </div>
        )
    }
}

export default Header;