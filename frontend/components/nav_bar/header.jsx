
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faIgloo } from '@fortawesome/free-solid-svg-icons';
import NavBarContainer from "./nav_bar_container"
import Search from './search'
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="nav-header">
                <div className="logo-container">
                  <Link to="/"> <FontAwesomeIcon className="logo" icon={faIgloo} size='3x' />
                    
                    </Link> 
                    <p className='Title'>WhereBNB</p>
                </div>
                < Search />
                <li className="users-dropdown-btn">
                    <FontAwesomeIcon className="bars" icon={faBars}  />
                    <FontAwesomeIcon className="user-icon" icon={faUserCircle}  />
                    
                    <NavBarContainer className="login-buttons-box" />
                </li>
            </div>
        )
    }
}

export default Header;