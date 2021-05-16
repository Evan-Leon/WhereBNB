import React from 'react';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component {
   

    render(){
        const {listing} = this.props;
    return(
        <li className="index-item-box">
            {/* <img src={listing.photoUrl}>[Placeholder Image]</img> */}
            <h3 className="index-title">{listing.title}</h3>
            <p>Number of beds: {listing.numBeds}</p>
            <p>Number of guests: {listing.guestNum}</p>
            
            <p>[review #]</p>
            <p>${listing.price}/night</p>
            <br />
        </li>
    )}
}

export default ListingIndexItem;