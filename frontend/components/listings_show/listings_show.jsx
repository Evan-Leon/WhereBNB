import React, {useState} from 'react';
// import MyCalendar from './calendar';
import Calendar from 'react-calendar';
import MyDateRange from './date_range';
import {DateRange} from 'react-date-range'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ListingMap from '../listings_map/listing_map';
import BookingForm from '../bookings/booking_form'



class ListingShow extends React.Component {
    constructor(props){
        super(props);
        // this.changeDate = this.changeDate.bind(this)
        this.state = {
            checkIn: new Date(),
            checkOut: new Date()
        }
        // this.handleSelect= this.handleSelect.bind(this)
        // this.updateDates = this.updateDates.bind(this);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
    }

   


    render(){
        const { listing } = this.props;
        
       
        
        if (!listing) return null;
        return(
            <div className= "listing-show-box">
                <div className="top-show">
                    <h3 className="listing-title">{listing.title}</h3>
                    <div className="review-city">
                        <p className="reviews"> <FontAwesomeIcon icon={faStar} className="star"/> 4.88 (27 reviews)</p>  
                        <p className="city" >{listing.city} </p>
                    </div>
                    <br />
                    <div className="photo-box">
                        <div className="title-photo">
                            <img className="cover-photo-show" src={listing.coverphotoUrl} alt="cover-photo" />
                        </div>
                        <div className="interior-images">
                            <img src={window.interior1} alt="interior-shot" className='int1'/>
                            <img src={window.interior2} alt="interior-shot" className='int2' />
                            <img src={window.interior3} alt="interior-shot" className='int3' />
                            <img src={window.interior4} alt="interior-shot" className='int4' />
                        </div>
                    </div>
                </div>
                <br />
                <div className="info-box">
                    <h3 className="host-title">Home hosted by <FontAwesomeIcon className="medal" icon={faMedal}/> Superhost</h3>
                    <div className="border-line"></div>
                    <br />
                    <div className="attributes">
                        <ul className='icon-list'>
                            <li> <FontAwesomeIcon icon={faHome} className="att-icons"  />  {listing.numBeds} Beds</li>
                            <li> <FontAwesomeIcon icon={faUsers} className="att-icons"   />  {listing.guestNum} Guests</li>
                            <li> <FontAwesomeIcon icon={faClipboardList} className="att-icons"   />    Follow House Rules</li>
                            <li> <FontAwesomeIcon icon={faHandSparkles} className="att-icons"   /> Enhanced Clean </li>
                        </ul>
                    </div>
                    <br />
                </div>
                
                <div className='description-box-show'>
                    <h3 className="desc-title">Description</h3>
                    <p className="show-description"> {listing.description}</p>
                </div>

                <div className="calendar-box">
                    <br />
                    < BookingForm 
                        listing={listing}
                        createBooking={this.props.createBooking}
                        currentUser = {this.props.currentUser}
                    />
                </div>

                <div className="review-container">
                    <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> 4.88 (27 reviews)</h3>
                    <div className="review-box">
                        <div className='act-review'>
                            <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
                            <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
                        </div>
                        <div className='act-review'>
                            <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Try and make me leave!</h4>
                            <p className="review-body">Didn't want to Leave! They did make me, but still all in all 5 stars!</p>
                        </div >
                        <div className='act-review'>
                            <h4 className="title-review"><FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> A home for friends</h4>
                            <p className="review-body">The host was the BEST! We became fast friends and now we live in this bnb together</p>
                        </div>
                        <div className='act-review'>
                            <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Best Location Ever!</h4>
                            <p className="review-body">Beautiful Location! I couldn't have been any closer to all the greatest happenings, had such a blast</p>
                        </div>
                        <div className='act-review'>
                            <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Would buy it if I could</h4>
                            <p className="review-body">Felt Like Home! I then made an offer on this home because I needed it to be MY HOME, in other words it was lovely</p>
                        </div>
                        <div className='act-review'>
                            <h4 className="title-review"><FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> I am lost please help</h4>
                            <p className="review-body">Take me back! No, really I am lost right now and still have this place booked, really this is not a review but a call for help</p>
                        </div>
                    </div>
                </div>
                <br />
                {/* <div className="show-map">
                    {/* < ListingMap /> */}
                    {/* [Map Place Holder] */}
                {/* </div> */} 

               

            </div>
        )
    }
}

export default ListingShow;