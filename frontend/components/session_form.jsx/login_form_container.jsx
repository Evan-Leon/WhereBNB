import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginSessionForm from './login_session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    // otherForm: (
    //     <button onClick={() => dispatch(openModal())}></button>
    // )
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(LoginSessionForm);