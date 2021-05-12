import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NavBar from "./nav_bar";
import { logout } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.session.currentUser,
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(NavBar);
