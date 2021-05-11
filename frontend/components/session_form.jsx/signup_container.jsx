import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup_form';


const mSTP = ({errors}) => ({
    errors: errors.session,
})
const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Signup);