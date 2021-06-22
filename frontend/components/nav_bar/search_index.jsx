import React from 'react';
import ListingIndexItem from '../listings_index/listing_index_item';
import ListingMap from '../listings_map/listing_map';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


class SearchIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listings: '',
        }
    }

    componentDidMount() {
        
        this.props.fetchSearch(this.props.match.params.searchString)
            .then(listings => this.setState(listings))
    }


    render(){
        
        
        
        if (this.state.listings === '') return null;
        // let listingArr = Object.values(this.state.listings);
        return(
            
            <div className="listings-index-box">
                <div className="listings-inner">
                    <h2 className="main-index-title">Stays around here</h2>
                    <ul className="list-indexes">
                        {
                    
                            Object.values(this.state.listings).map((listing, i) => (
                               <Link key ={i} to={`/listings/${listing.id}`} style={{ textDecoration: 'none' }}> <ListingIndexItem 
                                    listing= {listing}
                                    key={listing.id}
                                />
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                
                <div className='map-box'>
                    <ListingMap 
                    listings={Object.values(this.state.listings)}
                    // listingId={listing.id}
                    // singleListing={false}
                    // fetchListing = {fetchListing}
                    updateFilter = {this.props.updateFilter}
                    fetchListings = {this.props.fetchListings} />
                </div>
            </div>
        )
    }


}

export default withRouter(SearchIndex);