import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
    }



    render(){


        return(
            <div className="main-body">
                <div className="inspired-box">
                    <img src={window.hutsUrl} alt="huts" className="main-photo" />
                    <h2 className="happy-place">Find Your Happy Place</h2>
                    <Link to='/listings'><button className= "inspired">Get Inspired</button></Link>
                </div>
                <br />
                <h2 className="explore">Explore</h2>
                <ul className="explore-container">
                   <div className='city-explore'>
                        <Link to='/search/new york'><img className="new-york" src={window.cartoonLakeUrl} alt="lake" /></Link>
                        <li>New York</li>
                        
                    </div>
                    <div className="city-explore">
                    <Link to='/search/san francisco'><img className="san-fran" src={window.springsUrl} alt="springs" /></Link>
                        <li>San Francisco</li>
                    </div>
                    <div className="city-explore">
                    <Link to='/search/boston'><img className="boston" src={window.forestRiverUrl} alt="forest-river" /></Link>
                        <li>Boston</li>
                    </div>
                    <div className='city-explore'>
                    <Link to='/search/chicago'><img className="chicago" src={window.soundsUrl} alt="sound" /></Link>
                        <li>Chicago</li>
                    </div>
                    <div className="city-explore">
                    <Link to='/search/miami'><img className="miami" src={window.watersideUrl} alt="waterside" /></Link>
                        <li>Miami</li>
                    </div>
                    <div className="city-explore">
                    <Link to='/search/seattle'> <img className="seattle" src={window.riverUrl} alt="river" /></Link>
                        <li>Seattle</li>
                    </div>
                </ul>
                <br />
                <h2 className="live-anywhere">Live Anywhere</h2>
                <ul className="visit-container">
                    <div className="visit-box">
                    <Link to="/listings/8"><img src={window.barnUrl} alt="barn" /></Link>
                        <li>Outdoor getaways</li>
                    </div>
                    <div className="visit-box">
                    <Link to="/listings/3"><img src={window.waterHouseUrl} alt="water-house" /></Link>
                        <li>Unique stays</li>
                    </div>
                    <div className="visit-box">
                        <Link to="/listings/4"><img src={window.triangleHouseUrl} alt="triangle-house" /></Link>
                        <li>Entire Homes</li>
                    </div>
                    <div className="visit-box">
                        <Link to="/listings"><img src={window.pugUrl} alt="pug" /></Link>
                        <li>Pets Allowed</li>
                    </div>
                </ul>
                <br />
                
            </div>
        )
    }
}

export default Home;