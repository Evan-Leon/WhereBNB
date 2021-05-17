import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listings_map/listing_map';

class ListingsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
        this.props.fetchListings();
    }


    render(){
        const {listings} = this.props;
        
        if (!listings) return null;
        return(
            <div className="listings-index-box">
                <ul>
                    {
                        listings.map(listing => (
                            <ListingIndexItem 
                                listing= {listing}
                                key={listing.id}
                            />
                        ))
                    }
                </ul>
                {/* <ListingMap /> */}
            </div>
        )
    }


}

export default ListingsIndex;

