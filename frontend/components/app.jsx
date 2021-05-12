import React from 'react';
import { Route, Link } from 'react-router-dom';
import Modal from './modal/modal';
import Home from './home/home';
import Footer from './footer/footer';


import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Header from './nav_bar/header';

const App = () => (
    <div className="app-box">
      <Modal />
      < Header />
      < Home />
      < Footer />
    </div>
  
)

export default App;