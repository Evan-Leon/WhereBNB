import React from 'react';
import NavBarContainer from "./nav_bar_container"
import Search from './search'

class Header extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return(
            <header className="nav-header">
                <img src={window.logoUrl} alt="wherebnb-logo" className="logo" />
                < Search />
                < NavBarContainer />
            </header>
        )
    }
}

export default Header;