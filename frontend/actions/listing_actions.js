import * as APIListingUtils from '../utils/listing_utils';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

const receiveListings = listings => {
    
    return({
    type: RECEIVE_LISTINGS,
    listings
})}

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing 
})

export const fetchListings = () => dispatch => {
    return(
    APIListingUtils.fetchListings()
    .then(listings => dispatch(receiveListings(listings))))
};

export const fetchListing = id => dispatch => (
    APIListingUtils.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)))
);
