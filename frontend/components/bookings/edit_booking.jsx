import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking ,updateBooking } from '../../actions/booking_actions';

class EditBookingForm extends React.Component {
   
    componentDidMount(){
        this.props.fetchBooking(this.props.match.params.bookingId);
    }

    render() {
        const { action, formType, booking} = this.props;

        if (!booking) return null;
        return (
            < BookingForm 
                action={action}
                formType={formType}
                booking={booking}
                />
        )
    }
}

const mSTP = state => ({
    booking: state.bookings[ownProps.match.params.bookingId],
    formType: 'Update Booking'
})

const mDTP = dispatch => ({
    fetchPost: bookingId => dispatch(fetchBooking(bookingId)),
    action: post => dispatch(updateBooking(post))
})

export default connect(mSTP, mDTP)(EditBookingForm);
