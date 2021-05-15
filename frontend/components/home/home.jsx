import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
    }



    render(){


        return(
            <div className="main-body">
                <h2>BANNER PICTURE WITH BUTTON</h2> 
                <br />
                <h2>Explore</h2>
                <ul className="explore-container">
                    <li>New York City</li>
                    <li>San Francisco</li>
                    <li>Boston</li>
                    <li>Chicago</li>
                    <li>Miami</li>
                    <li>Seattle</li>
                </ul>
                <br />
                <h2 className="live-anywhere">Live Anywhere</h2>
                <ul className="visit-container">
                    <li>Outdoor getaways</li>
                    <li>Unique stays</li>
                    <li>Entire Homes</li>
                    <li>Pets Allowed</li>
                </ul>
                <br />
                [Become Host/ Discover Experiences?]
            </div>
        )
    }
}

export default Home;