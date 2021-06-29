import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import ReviewShow from './review_show';
import { openModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';

const mSTP = state => ({
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews),
    userName: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchReviews: userId => dispatch(fetchReviews(userId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    openModal: modal => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(ReviewShow);