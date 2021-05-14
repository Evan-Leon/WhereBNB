import React from 'react';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component {
   

    render(){
        const {listing} = this.props;
    return(
        <li>
            <p>[Placeholder Image]</p>
            <h3>{listing.title}</h3>
            <p>Number of beds: {listing.num_beds}</p>
            <p>Number of guests: {listing.guest_num}</p>
            <br />
            <p>[review #]</p>
            <p>${listing.price}/night</p>
        </li>
    )}
}

export default ListingIndexItem;