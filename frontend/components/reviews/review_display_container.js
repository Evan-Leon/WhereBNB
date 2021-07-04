import { connect } from 'react-redux';
import { fetchListingReviews } from '../../actions/review_actions';
import ReviewDisplay from './review_display';

const mSTP = state => {
    
    return ({
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews)
})}

const mDTP = dispatch => ({
    fetchListingReviews: listingId => dispatch(fetchListingReviews(listingId)),
})

export default connect(mSTP, mDTP)(ReviewDisplay);