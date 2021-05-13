export const fetchListings = listings => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
        listings 
    })
);

export const fetchListing = id =>(
    $.ajax({
        method: "GET",
        url: `/api/listings/${id}`
    })
)