import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginSessionFormContainer from '../sesion_form/login_form_container';
import SignupFormContainer from '../session_form/signup_container';

function Modal({modal, closeModal}) {
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginSessionFormContainer />
            break;
        case 'signup':
            component = <SignupFormContainer />
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
    closeModal: dispatch(closeModal())
})

export default connect(mSTP, mDTP)(modal);