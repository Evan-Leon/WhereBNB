import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewShow from './review_show';

const mSTP = state => ({
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews),
})

const mDTP = dispatch => ({
    fetchReviews: userId => dispatch(fetchReviews(userId)),
})

export default connect(mSTP, mDTP)(ReviewShow);