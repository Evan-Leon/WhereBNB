import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import Home from './home/home';
import Footer from './footer/footer';
import ListingShowContainer from './listings_show/listings_show_container';
import ListingsIndexContainer from './listings_index/listing_index_container';
import SearchIndexContainer from './nav_bar/search_index_container';


import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Header from './nav_bar/header';

const App = () => (
    <div className="app-box">
      <Modal />
      <div className="header-nav">
        {/* <img src={window.logoUrl} alt="wherebnb-logo" className="logo" /> */}
        < Header />
      </div>
      
      <Switch>
        <Route path="/listings/:listingId" component={ListingShowContainer} />
        <Route path="/search/:searchString" component={SearchIndexContainer} />
        <Route path="/listings" component={ListingsIndexContainer} />
        
        <Route path="/" component={Home}/>
      </Switch>
      < Footer />
    </div>
  
)

export default App;