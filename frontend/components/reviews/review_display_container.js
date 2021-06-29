import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewDisplay from './review_display';

const mSTP = state => ({
    currentUser: state.session.id
})

const mDTP = dispatch => ({
    fetchReviews: listingId => dispatch(fetchReviews(listingId)),
})

export default connect(mSTP, mDTP)(ReviewDisplay);