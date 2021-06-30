import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';


class BookingShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: ''
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    componentDidMount() {

        this.props.fetchBookings(this.props.currentUser)


    }

    // componentDidUpdate(prevProps, prevState) {
    //     debugger
    //     if (this.state !== prevState) {
    //         debugger
    //         this.props.fetchReviews(this.props.currentUser)
    //             .then(reviews => this.setState({ reviews }))

    //     }
    // }



    handleDelete(e) {
        e.preventDefault()

        this.props.deleteBooking(e.target.value)
            .then(() => this.props.fetchBookings(this.props.currentUser))
    }

    handleEdit(e) {
        e.preventDefault();
        debugger
        // this.props.updateFilter('edit-booking', [e.target.value])
        this.props.openModal('edit-booking')
    }

    render() {

        let { bookings } = this.props;

        if (!bookings) return null;
        debugger
        return (

            <div className="booking-show-container">
                <h1>BOOKINGS</h1>
                {Object.values(bookings).map((booking, i) => (
                    <div key={i} className="booking-show-box">
                        <div className="booking-show-container">
                            <li>{console.log(booking)}</li>
                            <li>Location: {booking.listing.city}</li>
                            <li>$/night: {booking.listing.price}</li>
                            <li > Check-in: {booking.checkIn} </li>
                            <li > Checkout: {booking.checkOut} </li>
                            <li > Number of Guests: {booking.guestNum} </li>
                            {/* <li className="rev-date">{format(new Date(rev.createdAt), 'MMMM yyyy')}</li> */}
                            <div className="edit-delete-btns-container">
                                <button className="edit-delete-btns" value={booking.id} onClick={this.handleDelete}>Delete Booking</button>
                                <button className="edit-delete-btns" value={booking.id} onClick={this.handleEdit}>Edit Booking</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            // <div className="review-container">
            //     <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</h3>
            //     {/* <div className="review-box">
            //         <div className='act-review'>
            //             <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
            //             <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
            //         </div>
            //     </div> */}
            //     <div className='actual-reviews'>



            //             {

            //                 Object.values(reviews).map((review, i) => (
            //                     <div className="review-display-container" key={i}>
            //                         <div className="user-title-container">
            //                             <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />{review.guest.first_name} </li>
            //                             <li className="rev-date">{format(new Date(review.createdAt),'MMMM yyyy' )}</li>
            //                         </div>
            //                         <li > {review.body} </li>
            //                     </div>
            //                 ))
            //             }

            //     </div>
            // </div>
        )
    }


}

export default BookingShow;