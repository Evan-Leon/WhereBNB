import React, {useState} from 'react';
// import MyCalendar from './calendar';
import Calendar from 'react-calendar';
import DateRange from './date_range';

class ListingShow extends React.Component {
    constructor(props){
        super(props);
        // this.changeDate = this.changeDate.bind(this)
        this.state = {
            checkin: new Date(),
            checkout:new Date()
        }
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
    }

    // changeDate(date){
    //     date => {debugger}
    // }



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
                    <DateRange onChange={(e) => {debugger}}   className="calendar" />
                </div>

            </div>
        )
    }
}

export default ListingShow;