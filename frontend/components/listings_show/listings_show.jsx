import React, {useState} from 'react';
// import MyCalendar from './calendar';
import Calendar from 'react-calendar';

class ListingShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
    }



    render(){
        const { listing } = this.props;
        // const [value, onChange] = useState(new Date());
        if (!listing) return null;
        return(
            <div className= "listing-show-box">
                <div className="top-show">
                    <h3 className="listing-title">{listing.title}</h3>

                    <p className="reviews">[REVIEW SCORE] Location</p>
                    <br />
                    <div className="photo-box">
                        <p>[PlaceHolderPhoto]</p>
                    </div>
                </div>
                <br />
                <div className="info-box">
                    <h3 className="host-title">Home hosted by {listing.hostId}</h3>
                    <div className="border-line"></div>
                    <br />
                    <p>Number of beds: {listing.numBeds}</p>
                    <p>Number of guests: {listing.guestNum}</p>
                    <br />
                </div>
                
                {/* <p>${listing.price}/night</p> */}

                <div className='description-box-show'>
                    <p className="show-description"> {listing.description}</p>
                </div>

                <div className="calendar-box">
                    <h3>Select check-in date</h3>
                    <br />
                    <Calendar className="calendar" />
                </div>

            </div>
        )
    }
}

export default ListingShow;