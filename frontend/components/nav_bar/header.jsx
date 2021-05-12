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
                <div className="logo-title-box">
                    <img src={window.logoUrl} alt="wherebnb-logo" className="logo" />
                </div>
                < Search />
                < NavBarContainer />

            </header>
        )
    }
}

export default Header;