import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchListings();
    }


    render(){
        const {listings} = this.props;
        debugger
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
            </div>
        )
    }


}

export default ListingsIndex;

