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
                <div className="listings-inner">
                    <h2 className="main-index-title">Stays around here</h2>
                    <ul className="list-indexes">
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
                {/* <ListingMap /> */}
                <div    className='map-box'>

                </div>
            </div>
        )
    }


}

export default ListingsIndex;

