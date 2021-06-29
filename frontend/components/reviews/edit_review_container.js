import { connect } from 'react-redux';
import { updateReview, fetchReview } from '../../actions/review_actions';
import EditReview from './edit_review';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => 
{

    debugger
    return({
    currentUser: state.session.id,
    reviewId: Object.keys(state.ui.filters),
    review: state.entities.reviews[Number(Object.keys(state.ui.filters)[0])]
    })
}

const mDTP = dispatch => ({
    updateReview: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
    fetchReview: reviewId => dispatch(fetchReview(reviewId))
})

export default connect(mSTP, mDTP)(EditReview);