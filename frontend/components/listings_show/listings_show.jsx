import React from 'react';

class ListingShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
    }



    render(){
        const { listing } = this.props;
        if (!listing) return null;
        return(
            <div className= "listing-show-box">
                <p>[PlaceHolderPhoto]</p>
                <h3 className="listing-title">{listing.title}</h3>
                <p>Number of beds: {listing.numBeds}</p>
                <p>Number of guests: {listing.guestNum}</p>
                <p>[REVIEWS]</p>
                <p>${listing.price}/night</p>

            </div>
        )
    }
}

export default ListingShow;