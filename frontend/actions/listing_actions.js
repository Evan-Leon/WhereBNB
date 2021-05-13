import * as APIListingUtils from '../utils/listing_utils';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing 
})

export const fetchListings = () => dispatch => (
    APIListingUtils.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = id => dispatch => (
    APIListingUtils.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)))
);
