import React from 'react';
import {Link} from 'react-router-dom';

const ListingIndexItem = props => (
    <li>
        <p>[Placeholder Image]</p>
        <h3>{props.listing.title}</h3>
        <p>Number of beds: {props.listing.num_beds}</p>
        <p>Number of guests: {props.listing.num_beds}</p>
        <br />
        <p>[review #]</p>
        <p>${props.listing.price}/night</p>
    </li>
)

export default ListingIndexItem;