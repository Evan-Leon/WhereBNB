import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import BookingShow from './booking_show';
import { openModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';

const mSTP = state => ({
    currentUser: state.session.id,
    bookings: Object.values(state.entities.bookings),
    userName: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchBookings: userId => dispatch(fetchBookings(userId)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    openModal: modal => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(BookingShow);