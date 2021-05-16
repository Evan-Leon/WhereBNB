import React from 'react';

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
                    <button className= "inspired">Get Inspired</button>
                </div>
                <br />
                <h2 className="explore">Explore</h2>
                <ul className="explore-container">
                    <img src={window.cartoonLakeUrl} alt="lake" />
                    <li>New York</li>
                    <img src={window.springsUrl} alt="springs" />
                    <li>California</li>
                    <img src={window.forestRiverUrl} alt="forest-river" />
                    <li>Boston</li>
                    
                    <img src={window.soundsUrl} alt="sound" />
                    <li>Chicago</li>
                    
                    <img src={window.watersideUrl} alt="waterside" />
                    <li>Miami</li>
                    
                    <img src={window.riverUrl} alt="river" />
                    <li>Seattle</li>
                </ul>
                <br />
                <h2 className="live-anywhere">Live Anywhere</h2>
                <ul className="visit-container">
                    <li>Outdoor getaways</li>
                    <img src={window.barnUrl} alt="barn" />
                    <li>Unique stays</li>
                    <img src={window.waterHouseUrl} alt="water-house" />
                    <li>Entire Homes</li>
                    <img src={window.triangleHouseUrl} alt="triangle-house" />
                    <li>Pets Allowed</li>
                    <img src={window.pugUrl} alt="pug" />
                </ul>
                <br />
                [Become Host/ Discover Experiences?]
            </div>
        )
    }
}

export default Home;