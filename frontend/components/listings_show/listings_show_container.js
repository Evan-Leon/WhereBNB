import { connect } from 'react-redux';

import ListingShow from './listings_show';
import { fetchListing } from '../../actions/listing_actions'

const mSTP = (state, ownProps) => {
    debugger
    return(
{
    listing: state.entities.listings[ownProps.match.params.listingId]
})}

const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default connect(mSTP, mDTP)(ListingShow);