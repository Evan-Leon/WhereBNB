import React from 'react';
import {DateRange} from 'react-date-range';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkIn: new Date(),
            checkOut: new Date(),
            numGuests: this.props.listing.guestNum,
            errors: [],
            booked: false
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.updateDates = this.updateDates.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.noDates = this.noDates.bind(this);
    }


    handleSelect(e) {
        e.preventDefault();
       
        let booking = {
            check_in: this.state.checkIn,
            check_out: this.state.checkOut,
            guest_id: this.props.currentUser,
            listing_id: this.props.listing.id,
            num_guests: this.state.numGuests
        }
        
        this.props.createBooking(booking)
            .then(() => this.setState({checkIn: new Date(),
                checkOut: new Date(),
                numGuests: this.props.listing.guestNum,
                errors: [],
                booked:true
        }))

        
      
    }

    updateDates(e) {
        let { startDate, endDate } = e.selection;
        
        this.setState({
            checkIn: startDate,
            checkOut: endDate
        })
    }

    handleGuest(e) {
        console.log(e.target.value)
        this.setState({
            numGuests: e.target.value,
        })
    }

    noDates() {

        if (this.props.listing) {
            const dates = [];
            this.props.listing.bookings.map(booking => {
                dates.push([new Date([booking.check_in]), new Date([booking.check_out])])
            })
            return dates;
        }
    }

    render(){

        // const { listing } = this.props;
       
        let selectionRange = {
            startDate: this.state.checkIn,
            endDate: this.state.checkOut,
            key: 'selection',
        }
        
        let noDates = this.noDates();
        debugger
        if (!this.state.booked){
            return(
            <div className="booking-form-container">
                <form onSubmit={this.handleSelect} className="res-form">
                    <DateRange
                        ranges={[selectionRange]}
                        onChange={this.updateDates}
                        editableDateInputs={true}
                        showSelectionPreview={true}
                        months={2}
                        direction="horizontal"
                        showDateDisplay={false}
                        showMonthAndYearPickers={false}
                        minDate={new Date()}
                        disabledDates={noDates}
                        />
                       
                       <div className="booking-box">
                           <div className="booking-box-header">
                               <div className="price-container">
                                    <p className="box-price">${this.props.listing.price}</p>
                                    <p className="night">/night</p>
                                </div>
                                <p><FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</p>
                            </div>
                            <div className="check-in-out">
                                <div className="check-in-container">
                                    <label className="check-label" >CHECK-IN</label>
                                    <p className="check-in">{format(this.state.checkIn, "MMM d yyyy")}</p>
                                </div>
                                <div className="check-out-container">
                                    <label className="check-label" >CHECKOUT</label>
                                    <p className="check-out">{format(this.state.checkOut, "MMM d yyyy")}</p>
                                </div>
                                
                            </div>
                            <div className="guests-container">
                                <label className="guest-label" htmlFor="num-guests">GUESTS</label>
                                <select className="num-guests" id="num-guests" value={this.state.numGuests} onChange={this.handleGuest}>
                                    <option value="1">1 guest</option>
                                    <option value="2">2 guests</option>
                                    <option value="3">3 guests</option>
                                    <option value="4">4 guests</option>
                                    <option value="5">5 guests</option>
                                    <option value="6">6 guests</option>
                                    <option value="7">7 guests</option>
                                    <option value="8">8 guests</option>
                                    <option value="9">9 guests</option>
                                </select>
                            </div>
                            <div className="cost">
                                <div className="night-cost">
                                    <p>${this.props.listing.price} x {formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1))}</p>
                                    <p>${([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0,1)])}</p>
                                </div>
                                <div className="services">
                                    <p>Service Fee</p>
                                    <p>$57</p>
                                </div>
                                <div className="taxes">
                                    <p>Occupancy taxes and fees</p>
                                    <p>${(([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0,1)]))*(.05)}</p>
                                </div>
                                <div className="total">
                                    <p>Total</p>
                                    <p>${([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0,1)])
                                        + (([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0,1)]))*(.05)
                                        + (57)}</p>
                                </div>
                            </div>
                            
                            <button className="booking-sub" type="submit" value={this.props.formType}>Check availability</button>
                        </div>
                </form>
            </div>
        )} else {
            return (
                <div className="booking-form-container">
                    <form onSubmit={this.handleSelect} className="res-form">
                        <DateRange
                            ranges={[selectionRange]}
                            onChange={this.updateDates}
                            editableDateInputs={true}
                            showSelectionPreview={true}
                            months={2}
                            direction="horizontal"
                            showDateDisplay={false}
                            showMonthAndYearPickers={false}
                            minDate={new Date()}
                            disabledDates={noDates}
                        />

                        <div className="booking-box">
                            <div className="booking-box-header">
                                <div className="price-container">
                                    <p className="box-price">${this.props.listing.price}</p>
                                    <p className="night">/night</p>
                                </div>
                                <p><FontAwesomeIcon icon={faStar} className="star" /> {this.props.roundRating} ({this.props.reviewNum} reviews)</p>
                            </div>
                            <div className="check-in-out">
                                <div className="check-in-container">
                                    <label className="check-label" >CHECK-IN</label>
                                    <p className="check-in">{format(this.state.checkIn, "MMM d yyyy")}</p>
                                </div>
                                <div className="check-out-container">
                                    <label className="check-label" >CHECKOUT</label>
                                    <p className="check-out">{format(this.state.checkOut, "MMM d yyyy")}</p>
                                </div>

                            </div>
                            <div className="guests-container">
                                <label className="guest-label" htmlFor="num-guests">GUESTS</label>
                                <select className="num-guests" id="num-guests" value={this.state.numGuests} onChange={this.handleGuest}>
                                    <option value="1">1 guest</option>
                                    <option value="2">2 guests</option>
                                    <option value="3">3 guests</option>
                                    <option value="4">4 guests</option>
                                    <option value="5">5 guests</option>
                                    <option value="6">6 guests</option>
                                    <option value="7">7 guests</option>
                                    <option value="8">8 guests</option>
                                    <option value="9">9 guests</option>
                                </select>
                            </div>
                            <div className="cost">
                                <div className="night-cost">
                                    <p>${this.props.listing.price} x {formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1))}</p>
                                    <p>${([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0, 1)])}</p>
                                </div>
                                <div className="services">
                                    <p>Service Fee</p>
                                    <p>$57</p>
                                </div>
                                <div className="taxes">
                                    <p>Occupancy taxes and fees</p>
                                    <p>${(([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0, 1)])) * (.05)}</p>
                                </div>
                                <div className="total">
                                    <p>Total</p>
                                    <p>${([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0, 1)])
                                        + (([this.props.listing.price]) * ([formatDistanceStrict(this.state.checkIn, addDays(this.state.checkOut, 1)).slice(0, 1)])) * (.05)
                                        + (57)}</p>
                                </div>
                            </div>

                            <button className="booking-sub" type="submit" value={this.props.formType} disabled>Booked!</button>
                        </div>
                    </form>
                </div>
            )
        }
            
        }
    
}

export default BookingForm;