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
                        <img src={window.cartoonLakeUrl} alt="lake" />
                        <li>New York</li>
                    </div>
                    <div className="city-explore">
                        <img src={window.springsUrl} alt="springs" />
                        <li>San Francisco</li>
                    </div>
                    <div className="city-explore">
                        <img src={window.forestRiverUrl} alt="forest-river" />
                        <li>Boston</li>
                    </div>
                    <div className='city-explore'>
                        <img src={window.soundsUrl} alt="sound" />
                        <li>Chicago</li>
                    </div>
                    <div className="city-explore">
                        <img src={window.watersideUrl} alt="waterside" />
                        <li>Miami</li>
                    </div>
                    <div className="city-explore">
                        <img src={window.riverUrl} alt="river" />
                        <li>Seattle</li>
                    </div>
                </ul>
                <br />
                <h2 className="live-anywhere">Live Anywhere</h2>
                <ul className="visit-container">
                    <div className="visit-box">
                        <img src={window.barnUrl} alt="barn" />
                        <li>Outdoor getaways</li>
                    </div>
                    <div className="visit-box">
                        <img src={window.waterHouseUrl} alt="water-house" />
                        <li>Unique stays</li>
                    </div>
                    <div className="visit-box">
                        <img src={window.triangleHouseUrl} alt="triangle-house" />
                        <li>Entire Homes</li>
                    </div>
                    <div className="visit-box">
                        <img src={window.pugUrl} alt="pug" />
                        <li>Pets Allowed</li>
                    </div>
                </ul>
                <br />
                [Become Host/ Discover Experiences?]
            </div>
        )
    }
}

export default Home;