import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import EditBookingContainer from '../bookings/edit_booking_container';
// import BookingFormContainer from '../bookings/create_booking_container';
import EditReviewContainer from '../reviews/edit_review_container';


function Modal({modal, closeModal}) {
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = < LoginFormContainer/>;
            break;
        case 'signup':
            component = <SignupFormContainer/>;
            break;
        case 'edit-review':
            component = <EditReviewContainer />;
            break;
        case 'edit-booking':
            component = <EditBookingFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(Modal);