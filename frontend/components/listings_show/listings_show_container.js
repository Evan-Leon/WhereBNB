import { connect } from 'react-redux';

import ListingShow from './listings_show';
import { fetchListing } from '../../actions/listing_actions';
import { createBooking } from '../../actions/booking_actions';
import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => (
    {
    listing: state.entities.listings[ownProps.match.params.listingId],
    currentUser: state.session.id,
    
});

const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchReviews: listingId => dispatch(fetchReviews(listingId))
})

export default connect(mSTP, mDTP)(ListingShow);