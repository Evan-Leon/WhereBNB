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
                    <div className='new-york'>
                        <img src={window.cartoonLakeUrl} alt="lake" />
                        <li>New York</li>
                    </div>
                    <div className="california">
                        <img src={window.springsUrl} alt="springs" />
                        <li>California</li>
                    </div>
                    <div className="boston">
                        <img src={window.forestRiverUrl} alt="forest-river" />
                        <li>Boston</li>
                    </div>
                    <div className='chicago'>
                        <img src={window.soundsUrl} alt="sound" />
                        <li>Chicago</li>
                    </div>
                    <div className="miami">
                        <img src={window.watersideUrl} alt="waterside" />
                        <li>Miami</li>
                    </div>
                    <div className="seattle">
                        <img src={window.riverUrl} alt="river" />
                        <li>Seattle</li>
                    </div>
                </ul>
                <br />
                <h2 className="live-anywhere">Live Anywhere</h2>
                <ul className="visit-container">
                    <div className="outdoor">
                        <img src={window.barnUrl} alt="barn" />
                        <li>Outdoor getaways</li>
                    </div>
                    <div className="unique">
                        <img src={window.waterHouseUrl} alt="water-house" />
                        <li>Unique stays</li>
                    </div>
                    <div className="entire-homes">
                        <img src={window.triangleHouseUrl} alt="triangle-house" />
                        <li>Entire Homes</li>
                    </div>
                    <div className="pets">
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