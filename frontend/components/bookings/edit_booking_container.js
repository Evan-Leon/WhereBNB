import { connect } from 'react-redux';
import { updateBooking, fetchBooking, deleteBooking } from '../../actions/booking_actions';
import EditBooking from './edit_booking';
import { closeModal } from '../../actions/modal_actions';
import { removeFilter } from '../../actions/filter_actions';

const mSTP = state => {

    
    return ({
        currentUser: state.session.id,
        bookingId: Object.keys(state.ui.filters),
        bookings: Object.values(state.entities.bookings)
    })
}

const mDTP = dispatch => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
    removeFilter: () => dispatch(removeFilter()),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
})

export default connect(mSTP, mDTP)(EditBooking);